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
    controller: 'SecondController'
  }).
  when('/reviews', {
    templateUrl: 'partials/settings.html',
    controller: 'SettingsController'
  }).
  when('/llamalist', {
    templateUrl: 'partials/llamalist.html',
    controller: 'LlamaListController'
  }).
  otherwise({
    redirectTo: '/subjects'
  });
}]);