// js/services/todos.js
angular.module('demoServices', [])
    .factory('User', function($http){
      return {
        checkin : function(userID, lat, lng) {
          return $http({
            method: 'POST',
            url: 'http://localhost:4000/api/user' +
            '?latlng=' + lat + ',' + lng + '&' +
            '?userID=' + userID
          });
        }
      }
    });
