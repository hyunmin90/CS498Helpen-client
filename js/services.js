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
        },
        getFriendList :function(lat, lng){
          return $http({
            method: 'GET',
            url: 'http://localhost:4000/api/user' +
            '?latlng=' + lat + ',' + lng});
        },

        addUser : function(username, password, name, email) {
          console.log(username + password + name + email);
          return $http({
            method: "POST",
            url: "http://localhost:4000/api/user/adduser",
            data: $.param({
              name: name,
              email: email,
              username: username,
              password: password
            })
          });
        }
        
      }
    });
