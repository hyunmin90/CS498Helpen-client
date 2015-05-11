// js/services/todos.js
angular.module('helpenServices', [])
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
    .factory('Subject', function($http){
      return {
        getSubjects:function() {
         var subjectList = 
         [
         {
            "Name": "ECE 330",
         },
         {
            "Name": "CS 440",
         }];
        return subjectList;
        },
        getSubjectbyPosition:function(lat,longt) {
          var arr =[];
          var locations = {
          "places": [
          {
               "Name": "Thomas M Siebel Centre for Computer Science",
               "Lat": 40.113804,
               "Long": -88.22491,
               "Latituderange":0.000750,
               "Longituderange":0.000740

          },
          {
            "Name": "Grainger Engineering Laboratory",
             "Lat": 40.1125,
             "Long": -88.22691,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Digital Computer Laboratory",
             "Lat": 40.113136,
             "Long": -88.22666,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Coordinated Science Laboratory",
             "Lat": 40.114956,
             "Long": -88.22672,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Beckman Institute",
             "Lat": 40.115803,
             "Long": -88.227516,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Electrical and Computer Engineering Building",
             "Lat": 40.110523,
             "Long": -88.26953,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "National Centre for Supercomputing Applications",
             "Lat": 40.114918,
             "Long": -88.22486,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Everitt Laboratory",
             "Lat": 40.110523,
             "Long": -88.26953,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Mechanical Engineering Building",
             "Lat": 40.110996,
             "Long": -88.22488,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Talbot Laboratory",
             "Lat": 40.111862,
             "Long": -88.228195,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Engineering hall",
             "Lat": 40.11086,
             "Long": -88.22688,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          },
          {
             "Name": "Micro and Nanotech Laboratory",
             "Lat": 40.113834,
             "Long": -88.2279,
             "Latituderange":0.000750,
             "Longituderange":0.000740
          }]
      };
      var list = locations.places;
      for(i=0;i<list.length;i++) {
    //console.log(list[i]);
         var currlat = 40.1138;
         var currlongt = -88.2279;
         var lat = list[i].Lat;
         var longt = list[i].Long;
         var latr = list[i].Latituderange;
         var longtr = list[i].Longituderange;
         if((lat - latr) <=  currlat && currlat<=(lat + latr)) {
             if((longt - longtr) <=  currlongt && currlongt<=(longt + longtr)) {
                arr.push(list[i]);
               }
           }
      }
      //console.log(arr);
      return arr;
      }
    });
