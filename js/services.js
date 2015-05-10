// js/services/todos.js
angular.module('demoServices', [])
    .factory('User', function($http){
      return {
        checkin : function(userID, lat, lng) {
          return $http({
            method: 'POST',
            url: 'http://104.236.213.176:4000/api/user' +
            '?latlng=' + lat + ',' + lng + '&' +
            '?userID=' + userID
          });
        },
        getFriendList :function(lat, lng){
          return $http({
            method: 'GET',
            url: 'http://104.236.213.176:4000/api/user' +
            '?latlng=' + lat + ',' + lng});
        },

        addUser : function(username, password, name, email) {
          return $http({
            method: 'POST',
            url: 'http://104.236.213.176:4000/api/user/adduser/',
            data: $.param({
              name: name,
              email: email,
              username: username,
              password: password
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
        },

        login : function(username, password) {
          console.log(username + password);
          return $http({
            method: 'POST',
            url: 'http://104.236.213.176:4000/api/login/',
            data: $.param({
              username: username,
              password: password
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
        } 


      }
    })
    .factory('Location', function($http){
      return {
        presence :function (range,buildingLat,buildingLongt,currentLat,currentLongt) { 
          var distance = Math.pow((buildingLat - currentLat),2) + Math.pow((buildingLongt - currentLongt),2);
          if(distance <= Math.pow((range),2)) {
            return true;
          }
          else {
            return false;
          }
        },
      }
    })
