'use strict';
 
var helpen = angular.module('helpen', ['ngRoute', 'helpenControllers', 'helpenServices', 'ngAnimate']);


var helpenServices = angular.module('helpenServices', []);
var helpenControllers = angular.module('helpenControllers', []);
//var demoDirectives = angular.module('demoDirectives', []);

helpen.config(['$locationProvider', '$routeProvider', 
  function($location, $routeProvider) {
    $routeProvider.
      when('/subjects', {
      templateUrl: 'partials/subjects.html',
      controller: 'SubjectController'
    }).
    when('/friends', {
      templateUrl: 'partials/friends.html',
      controller: 'FriendController'
    }).
    when('/reviews', {
      templateUrl: 'partials/reviews.html',
      controller: 'ReviewController'
    }).
    when('/reviews/:id', {
      templateUrl: 'partials/review_detail.html',
      controller: 'ReviewDetailController'
    }).
    when('/register', {
      templateUrl: 'partials/register.html',
      controller: 'RegisterController'
    }).
    when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'LoginController'
    }).
    when('/chat/:id', {
      templateUrl: 'partials/test.html',
      controller: 'ChatController'
    }). 
    when('/', {
         templateUrl: 'partials/login.html',
      controller: 'LoginController'
    }).
    otherwise({
      redirectTo: '/login'
    });   
}]);




