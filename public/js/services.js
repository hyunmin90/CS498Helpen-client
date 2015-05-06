// js/services/todos.js
angular.module('demoServices', [])
    .factory('Location', function($http){
      return {
        addr : function(lat,lng) {
          return $http({
              method: 'GET',
              url: 'https://maps.googleapis.com/maps/api/geocode/json' +
              '?latlng=' + lat + ',' + lng + '&' +
              '?key=AIzaSyAY0y7uKpLfmfP_XGFeCBYTFxYrjTmtUHE&'
           });
        },

        stops : function(lat,lng,num) {
          return $http({
              method: 'GET',

              url: 'https://developer.cumtd.com/api/v2.2/json/GetStopsByLatLon' +
              '?key=a1918356803e4ac5b605b11d3329f0e8' +
              '&lat=' + lat + '&lon=' + lng + '&count=' + num
          });
        }
      }

    })
    ;
