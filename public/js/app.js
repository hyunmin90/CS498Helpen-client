'use strict';
 
var demoApp = angular.module('demoApp', ['ngRoute', 'demoControllers', 'demoServices','demoDirectives', 'ngAnimate']);


var demoServices = angular.module('demoServices', []);
var demoControllers = angular.module('demoControllers', []);
var demoDirectives = angular.module('demoDirectives', []);



demoApp.config(['$locationProvider', '$routeProvider', 
  function($location, $routeProvider) {
    $routeProvider.
      when('/subjects', {
      templateUrl: 'partials/subjects.html',
      controller: 'FirstController'
    }).
    when('/friends', {
      templateUrl: 'partials/friends.html',
      controller: 'FirstController'
    }).
    when('/reviews', {
      templateUrl: 'partials/reviews.html',
      controller: 'FirstController'
    }).
    when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'FirstController'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'FirstController'
    }).
    when('/', {
      templateUrl: 'partials/login.html',
      controller: 'FirstController'
    }).
    otherwise({
      redirectTo: '/subjects'
    });   
}]);




