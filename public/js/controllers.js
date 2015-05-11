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



helpenControllers.controller('ChatController', ['$scope', 'User', function($scope, User) {
  var user = sessionStorage.getItem('login');
  
    var sock = new SockJS('http://helpenme.com:4000/chat');
  $scope.messages = [];
        $scope.sendMessage = function() {
            sock.send($scope.messageText);
            $scope.messageText = "";
        };

        sock.onmessage = function(e) {
            $scope.messages.push(e.data);
            $scope.$apply();
        };

  
  
  if(user === undefined || user == "" || user == null) {
    window.location.assign("/");
  }
  $scope.user = user;

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
  // var user = sessionStorage.getItem('login');
  // if(user === undefined || user == "" || user == null) {
  //   window.location.assign("/");
  // }
  //$scope.user = user;
  $scope.subjects = Subject.getSubjects();
  //console.log($scope.subjects);

  var arr =[];
  var locations = {
   "places": [
      {
         "Name": "Thomas M Siebel Centre for Computer Science",
         "Lat": 40.113804,
         "Long": -88.22491,
         "Latituderange":0.000750,
         "Longituderange":0.000740

      },
      {
         "Name": "Grainger Engineering Laboratory",
         "Lat": 40.1125,
         "Long": -88.22691,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Digital Computer Laboratory",
         "Lat": 40.113136,
         "Long": -88.22666,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Coordinated Science Laboratory",
         "Lat": 40.114956,
         "Long": -88.22672,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Beckman Institute",
         "Lat": 40.115803,
         "Long": -88.227516,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Electrical and Computer Engineering Building",
         "Lat": 40.110523,
         "Long": -88.26953,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "National Centre for Supercomputing Applications",
         "Lat": 40.114918,
         "Long": -88.22486,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Everitt Laboratory",
         "Lat": 40.110523,
         "Long": -88.26953,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Mechanical Engineering Building",
         "Lat": 40.110996,
         "Long": -88.22488,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Talbot Laboratory",
         "Lat": 40.111862,
         "Long": -88.228195,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Engineering hall",
         "Lat": 40.113834,
         "Long": -88.227901,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      },
      {
         "Name": "Micro and Nanotech Laboratory",
         "Lat": 40.113834,
         "Long": -88.2279,
         "Latituderange":0.000750,
         "Longituderange":0.000740
      }
      ]
  };
  var list = locations.places;
  for(i=0;i<list.length;i++) {
    //console.log(list[i]);
    var currlat = 40.1138;
    var currlongt = -88.2279;
    var lat = list[i].Lat;
    var longt = list[i].Long;
    var latr = list[i].Latituderange;
    var longtr = list[i].Longituderange;
    if((lat - latr) <=  currlat && currlat<=(lat + latr)) {
      if((longt - longtr) <=  currlongt && currlongt<=(longt + longtr)) {
        arr.push(list[i]);
      }
    }
  }
  console.log(arr);



 


}]);

helpenControllers.controller('FriendController', ['$scope', 'User', function($scope, User) {
  //var user = sessionStorage.getItem('login');
  // if(user === undefined || user == "" || user == null) {
  //   window.location.assign("/");
  // }
  //$scope.user = user;
  //$scope. = Subject.getSubjects();
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
