var helpenControllers = angular.module('helpenControllers', []);

helpenControllers.controller('LoginController', ['$scope', 'User', function($scope, User) {
  // default location when gps not available
  var lat = 40.1095828;
  var lng = -88.2117322;

  navigator.geolocation.getCurrentPosition(
      function(pos) {
          // obtain coordinates
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;
      },

      function(err) {
          console.error("Error fetching gps coordinates.");
      },

      // GPS options
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
  );

  sessionStorage.setItem('lat', lat);
  sessionStorage.setItem('lng', lng);

  $scope.login = function() {
    var id = $scope.username;
    var pw = $scope.password;

    User.login(id, pw).then(
      function(resp) {
        if (resp.status == 200) {
          sessionStorage.setItem('login', id);
          window.location.assign("/#/subjects");
        } else {
          alert("Login failed");
          console.log(resp);
        }
      },

      function(resp) {
        alert("Login failed");
        console.log(resp);
      }
    );
  };

  $scope.regUser = function(){
    window.location.assign("/#/register");
  };
}]);


helpenControllers.controller('RegisterController', ['$scope', 'User', function($scope, User) {
  $scope.regUser = function() {
    // add client-side input check
    if ($scope.username == "") return;

    User.addUser($scope.username, $scope.password, $scope.name, $scope.email).then(
      function(resp) {
        // repsonse received
        console.log(resp);
        alert("Success!");
      },

      function(resp) {
        // fail
        alert("User.addUser() failed");
        console.log(resp);
      }
    );
  };
}]);

helpenControllers.controller('SubjectController', ['$scope', 'User','Subject', function($scope, User,Subject) {
  var user = sessionStorage.getItem('login');
  if(user === undefined || user == "" || user == null) {
    window.location.assign("/");
  }
  $scope.user = user;
  $scope.subjects = Subject.getSubjects();

  $scope.declare = function(subject) {
    Subject.setSubject($scope.user, subject).then(
      function(resp) {
        //success
        console.log(resp);
        alert(subject + " has been set to your subject.");
      },
      function(resp) {
        console.log(resp);
        alert("set failed");
      }
    );
  };

}]);

helpenControllers.controller('FriendController', ['$scope', 'User', function($scope, User) {
  var user = sessionStorage.getItem('login');
  if(user === undefined || user == "" || user == null) {
    window.location.assign("/");
  }
  $scope.user = user;
  $scope.subjects = Subject.getSubjects();
  $scope.friends = 
         [{
            "Name": "Hyounimin Wang",
         },
         {
            "Name": "Dongmin Shin",
         },
         {
            "Name": "Joon Hyung",
         },
         {
            "Name": "Praful Mehrotra",
         }];

}]);

helpenControllers.controller('ReviewController', ['$scope', 'Location', function($scope, Location) {
  var user = sessionStorage.getItem('login');
  if(user === undefined || user == "" || user == null) {
    window.location.assign("/");
  }
  $scope.user = user;

  $scope.places = Location.all();

}]);

helpenControllers.controller('ReviewDetailController', ['$scope', '$routeParams', 'Location','Review', function($scope, $routeParams, Location,Review) {
  $scope.id = $routeParams.id;
  $scope.location = Location.getLocationByID($scope.id);
  console.log($scope.location);
  $scope.currat = 0;

  var sock = new SockJS('http://helpenme.com:4000/chat/'+$routeParams.id);
  
  $scope.messages = [];
  $scope.sendMessage = function() {
      sock.send($scope.messageText);
      $scope.messageText = "";
  };

  sock.onmessage = function(e) {
      $scope.messages.push(e.data);
      $scope.$apply();
  };
  console.log($scope.id);
  $scope.review = function() {
    if($scope.overall == undefined) {
      $scope.overall ="";
      alert("Invalid input!");
    }
    else if($scope.overall > 10 || $scope.overall < 0) {
      alert("Input out of range!");
    }
    else {
      Review.getReview($scope.id).then(
      function(resp) {
        // repsonse received
        console.log(resp);
        var response = resp.data.data;
        console.log(response);
        var oldr = response.rating;
        var oldc = response.numberOfParticipant;
        rating = oldr*oldc;
        rating = rating + parseInt($scope.overall);
        var number = response.numberOfParticipant + 1;
        response.numberOfParticipant = number;
        rating = rating/number;
        response.rating = rating;
        $scope.currat = rating;
        Review.sendReview($scope.id,response.rating,response.numberOfParticipant).then(
          function(resp) {
            console.log("success!");
            console.log(resp);
          },
          function(resp) {
            console.log("failure!");
          });
      },

      function(resp) {
        Review.addreview($scope.id,$scope.overall,1).then(
          function(resp) {
            console.log(resp);
            console.log("added");
          },
          function(resp) {
            console.log(resp);
          });
        }
    );

    }
  }


}]);
