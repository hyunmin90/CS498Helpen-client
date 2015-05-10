var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('FirstController', ['$scope', 'User', function($scope, User) {
  // default location when gps not available
  $scope.lat = 40.1095828;
  $scope.lng = -88.2117322;

  $scope.libraries=['grainger','UGL','ACES Library','Law Library'];

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
  
  $scope.login = function() {
    User.login($scope.username, $scope.password).then(
      function(resp) {
        // repsonse received
        alert("recvd back message");
        console.log(resp);
      },

      function(resp) {
        // fail
        alert("User.login() failed");
        console.log(resp);
      }
    );
  }



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

demoControllers.controller('SecondController', ['$scope',  function($scope) {


}]);


demoControllers.controller('LlamaListController', ['$scope', '$http', '$window' , function($scope, $http, $window) {




}]);

demoControllers.controller('SettingsController', ['$scope' , '$window' , function($scope, $window) {

}]);

demoControllers.controller('formCtrl', function($scope) {
    
});




