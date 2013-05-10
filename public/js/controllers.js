'use strict';

/* Controllers */

function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}
/*
function MyCtrl1() {}
MyCtrl1.$inject = [];*/


/*function MyCtrl2() {
}
MyCtrl2.$inject = [];*/


function DocCtrl($scope) {
    $scope.Resume = {name: "Matt Lovan",
        email: "mattlovan@gmail.edu",
        phone: "504.871.2928",
        streetaddress:"834 Johnson Street, Suite 808",
        city: "Victoria",
        state:"BC",
        zip:"V8W 1N3" };
}

