var demoControllers = angular.module('demoControllers', []);

demoControllers.controller('FirstController', ['$scope','$http', 'CommonData','$window', function($scope,$http, CommonData,$window) {
  $scope.subjects="";
  $scope.getData = function(){
    $scope.subjects = CommonData.getData();
    alert(JSON.stringify($scope.subjects));
  };
  

}]);

demoControllers.controller('SecondController', ['$scope', 'CommonData' , function($scope, CommonData) {
  $scope.subjects = "";

  $scope.getData = function(){
    $scope.subjects = CommonData.getData();

  };

}]);


demoControllers.controller('LlamaListController', ['$scope', '$http', 'Llamas', '$window' , function($scope, $http,  Llamas, $window) {

  Llamas.get().success(function(data){
    $scope.llamas = data;
  });


}]);

