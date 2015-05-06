// var demoApp = angular.module('demoApp', ['demoControllers']);

var demoApp = angular.module('demoApp', ['ngRoute', 'demoControllers', 'demoServices']);

demoApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider.
    when('/subjects', {
    templateUrl: 'partials/firstview.html',
    controller: 'FirstController'
  }).
  when('/friends', {
    templateUrl: 'partials/secondview.html',
    controller: 'FirstController'
  }).
  when('/reviews', {
    templateUrl: 'partials/reviews.html',
    controller: 'FirstController'
  }).
  when('/llamalist', {
    templateUrl: 'partials/llamalist.html',
    controller: 'LlamaListController'
  }).
  otherwise({
    redirectTo: '/subjects'
  });
}]);