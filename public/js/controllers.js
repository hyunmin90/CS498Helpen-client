var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('FirstController', ['$scope', 'User', function($scope, User) {
  // default location when gps not available
  $scope.lat = 40.1095828;
  $scope.lng = -88.2117322;

  $scope.libraries=['grainger','UGL','ACES Library','Law Library'];

  $scope.login = function() {
    User.addUser($scope.username, $scope.password, $scope.name, $scope.email).then(
      function(resp) {
        // success
        alert(resp);
      },

      function(resp) {
        // fail
        alert("fail");
        console.log(resp);
      }
    );
  };
  
  
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




