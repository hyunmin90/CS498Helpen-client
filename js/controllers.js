var helpenControllers = angular.module('helpenControllers', []);

helpenControllers.controller('FirstController', ['$scope', 'User', function($scope, User) {
  // default location when gps not available
  $scope.lat = 40.1095828;
  $scope.lng = -88.2117322;

  navigator.geolocation.getCurrentPosition(
      function(pos) {
          // obtain coordinates
          lat = pos.coords.latitude;
          lng = pos.coords.longitude;

          $scope.lat = lat;
          $scope.lng = lng;
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

}]);


helpenControllers.controller('LoginController', ['$scope', 'User', function($scope, User) {
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
  //console.log($scope.subjects);

  



 


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

helpenControllers.controller('ReviewDetailController', ['$scope', '$routeParams', 'Location', function($scope, $routeParams, Location) {
  $scope.id = $routeParams.id;
  $scope.location = Location.getLocationByID($scope.id);
  console.log($scope.location);

  var sock = new SockJS('http://localhost:4000/chat/'+$routeParams.id);
  
  $scope.messages = [];
  $scope.sendMessage = function() {
      sock.send($scope.messageText);
      $scope.messageText = "";
  };

  sock.onmessage = function(e) {
      $scope.messages.push(e.data);
      $scope.$apply();
  };


}]);
