// js/services/todos.js
angular.module('demoServices', [])  
    .factory('CommonData', function($http, $window) {      
        return {
            getData : function() {
                var val= $http.get("http://localhost:4000/api/subjects");
                alert(JSON.stringify(val));
                return val;
            }
        }
    });
