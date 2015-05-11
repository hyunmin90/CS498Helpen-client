// js/services/todos.js
var locations = {
          "places": [
        {
            "ID": "siebel",
            "Name": "Thomas M Siebel Centre for Computer Science",
            "Lat": 40.113804,
            "Long": -88.22491,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "grainger",
            "Name": "Grainger Engineering Laboratory",
            "Lat": 40.1125,
            "Long": -88.22691,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "dcl",
            "Name": "Digital Computer Laboratory",
            "Lat": 40.113136,
            "Long": -88.22666,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "csl",
            "Name": "Coordinated Science Laboratory",
            "Lat": 40.114956,
            "Long": -88.22672,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "beckman",
            "Name": "Beckman Institute",
            "Lat": 40.115803,
            "Long": -88.227516,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "eceb",
            "Name": "Electrical and Computer Engineering Building",
            "Lat": 40.110523,
            "Long": -88.26953,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "ncsa",
            "Name": "National Centre for Supercomputing Applications",
            "Lat": 40.114918,
            "Long": -88.22486,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "everitt",
            "Name": "Everitt Laboratory",
            "Lat": 40.110523,
            "Long": -88.26953,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "mechanical",
            "Name": "Mechanical Engineering Building",
            "Lat": 40.110996,
            "Long": -88.22488,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "talbot",
            "Name": "Talbot Laboratory",
            "Lat": 40.111862,
            "Long": -88.228195,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "engineering",
            "Name": "Engineering hall",
            "Lat": 40.11086,
            "Long": -88.22688,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        },
        {
            "ID": "micro",
            "Name": "Micro and Nanotech Laboratory",
            "Lat": 40.113834,
            "Long": -88.2279,
            "Latituderange": 0.00075,
            "Longituderange": 0.00074
        }
    ]
};
var classes = {  
   "subject":[  
      {  
         Name:"CS 100",
         Subject:"Freshman Orientation"
      },
      {  
         Name:"CS 101",
         Subject:"Intro Computing: Engrg & Sci"
      },
      {  
         Name:"CS 105",
         Subject:"Intro Computing: Non-Tech"
      },
      {  
         Name:"CS 125",
         Subject:"Intro to Computer Science"
      },
      {  
         Name:"CS 173",
         Subject:"Discrete Structures"
      },
      {  
         Name:"CS 196",
         Subject:"Freshman Honors"
      },
      {  
         Name:"CS 199",
         Subject:"Undergraduate Open Seminar"
      },
      {  
         Name:"CS 210",
         Subject:"Ethical & Professional Issues"
      },
      {  
         Name:"CS 225",
         Subject:"Data Structures"
      },
      {  
         Name:"CS 233",
         Subject:"Computer Architecture"
      },
      {  
         Name:"CS 241",
         Subject:"System Programming"
      },
      {  
         Name:"CS 242",
         Subject:"Programming Studio"
      },
      {  
         Name:"CS 296",
         Subject:"Honors Course"
      },
      {  
         Name:"CS 357",
         Subject:"Numerical Methods I"
      },
      {  
         Name:"CS 397",
         Subject:"Individual Study"
      },
      {  
         Name:"CS 411",
         Subject:"Database Systems"
      },
      {  
         Name:"CS 412",
         Subject:"Introduction to Data Mining"
      },
      {  
         Name:"CS 413",
         Subject:"Intro to Combinatorics"
      },
      {  
         Name:"CS 418",
         Subject:"Interactive Computer Graphics"
      },
      {  
         Name:"CS 420",
         Subject:"Parallel Progrmg: Sci & Engrg"
      },
      {  
         Name:"CS 421",
         Subject:"Progrmg Languages & Compilers"
      },
      {  
         Name:"CS 425",
         Subject:"Distributed Systems"
      },
      {  
         Name:"CS 426",
         Subject:"Compiler Construction"
      },
      {  
         Name:"CS 427",
         Subject:"Software Engineering I"
      },
      {  
         Name:"CS 431",
         Subject:"Embedded Systems"
      },
      {  
         Name:"CS 433",
         Subject:"Computer System Organization"
      },
      {  
         Name:"CS 438",
         Subject:"Communication Networks"
      },
      {  
         Name:"CS 439",
         Subject:"Wireless Networks"
      },
      {  
         Name:"CS 440",
         Subject:"Artificial Intelligence"
      },
      {  
         Name:"CS 445",
         Subject:"Computational Photography"
      },
      {  
         Name:"CS 446",
         Subject:"Machine Learning"
      },
      {  
         Name:"CS 447",
         Subject:"Natural Language Processing"
      },
      {  
         Name:"CS 450",
         Subject:"Numerical Analysis"
      },
      {  
         Name:"CS 461",
         Subject:"Computer Security I"
      },
      {  
         Name:"CS 465",
         Subject:"User Interface Design"
      },
      {  
         Name:"CS 476",
         Subject:"Program Verification"
      },
      {  
         Name:"CS 477",
         Subject:"Formal Software Devel Methods"
      },
      {  
         Name:"CS 481",
         Subject:"Stochastic Processes & Applic"
      },
      {  
         Name:"CS 483",
         Subject:"Applied Parallel Programming"
      },
      {  
         Name:"CS 491",
         Subject:"Seminar"
      },
      {  
         Name:"CS 492",
         Subject:"Senior Project I"
      },
      {  
         Name:"CS 498",
         Subject:"Special Topics"
      },
      {  
         Name:"CS 499",
         Subject:"Senior Thesis"
      },
      {  
         Name:"CS 519",
         Subject:"Scientific Visualization"
      },
      {  
         Name:"CS 527",
         Subject:"Topics in Software Engineering"
      },
      {  
         Name:"CS 541",
         Subject:"Computer Systems Analysis"
      },
      {  
         Name:"CS 549",
         Subject:"Seminar in Cognitive Science"
      },
      {  
         Name:"CS 554",
         Subject:"Parallel Numerical Algorithms"
      },
      {  
         Name:"CS 565",
         Subject:"Human-Computer Interaction"
      },
      {  
         Name:"CS 571",
         Subject:"Combinatorial Mathematics"
      },
      {  
         Name:"CS 574",
         Subject:"Randomized Algorithms"
      },
      {  
         Name:"CS 575",
         Subject:"Methods of Combinatorics"
      },
      {  
         Name:"CS 584",
         Subject:"Embedded System Verification"
      },
      {  
         Name:"CS 591",
         Subject:"Advanced Seminar"
      },
      {  
         Name:"CS 597",
         Subject:"Individual Study"
      },
      {  
         Name:"CS 598",
         Subject:"Special Topics"
      },
      {  
         Name:"CS 599",
         Subject:"Thesis Research"
      }
   ]
};

angular.module('helpenServices', [])
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
          return $http({
            method: 'POST',
            url: 'http://localhost:4000/api/user/adduser/',
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
            url: 'http://localhost:4000/api/login/',
            data: $.param({
              username: username,
              password: password
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
        } 


      }
    })  
    .factory('Subject', function($http){
      return {
        getSubjects : function() {
          return classes.subject;
        },

        setSubject : function(user, subject) {
          return $http({
            method: 'POST',
            url: 'http://localhost:4000/api/user/addsubject',
            data: $.param({
              username: user,
              subject: subject
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
          });
        }
      }
    }).
    factory('Location', function($http){
      return {
        getLocationbyPosition : function(currlat,currlongt) {
          var arr =[];
          var list = locations.places;
          for(i=0;i<list.length;i++) {
            var element = list[i];
            var lat = list[i].Lat;
            var longt = list[i].Long;
            var latr = list[i].Latituderange;
            var longtr = list[i].Longituderange;
            var distance = 0;
             if((lat - latr) <=  currlat && currlat<=(lat + latr)) {
               if((longt - longtr) <=  currlongt && currlongt<=(longt + longtr)) {
                distance = Math.pow(Math.abs(longt - currlongt),2) + Math.pow(Math.abs(lat - currlat),2);
                distance = Math.sqrt(distance);
                element["Distance"] = distance;
                arr.push(element);
               }
             }
          }
          arr.sort(function (a, b) {
          if (a.Distance > b.Distance) {
            return 1;
            }
          if (a.Distance < b.Distance) {
            return -1;
            }
          return 0;
          });
          return arr;
      
        },
        getLocationByID : function(ID) {
          var i = 0;
          var retval = -1;
          var list = locations.places;
          for(i=0;i<list.length;i++) {
            if(list[i].ID == ID) {
                retval = list[i];
            }
          }
          return retval;
        },
        presence :function (range,buildingLat,buildingLongt,currentLat,currentLongt) { 
          var distance = Math.pow((buildingLat - currentLat),2) + Math.pow((buildingLongt - currentLongt),2);
          if(distance <= Math.pow((range),2)) {
            return true;
          }
          else {
            return false;
          }
        },
        all : function() {
          return locations.places;
        }
       }
    }).
    factory('Review', function($http) {
        return {
         getReview:function(buildingID) {
             return $http({
             method: 'POST',
             url: 'http://104.236.213.176:4000/api/review/findreview/',
             data: $.param({
               buildingId: buildingID
             }),
             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
             });
          },
         addreview:function(buildingID, rating,numberOfParticipants) {
            return $http({
             method: 'POST',
             url: 'http://104.236.213.176:4000/api/review/addreview/',
             data: $.param({
               buildingId: buildingID,
               rating: rating,
               numberOfParticipant: numberOfParticipants,
               
             }),
             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
           });

         },   
         sendReview:function(buildingID, rating, numberOfParticipants) {
             return $http({
             method: 'POST',
             url: 'http://104.236.213.176:4000/api/review/updatereview/',
             data: $.param({
               buildingId: buildingID,
               rating: rating,
               numberOfParticipant: numberOfParticipants,
               
             }),
             headers: {'Content-Type': 'application/x-www-form-urlencoded'}
           });

           }
        }
    });
