'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    //$routeProvider.when('/view1', {templateUrl: 'partials/partial1', controller: MyCtrl1});
    //$routeProvider.when('/view2', {templateUrl: 'partials/partial2', controller: MyCtrl2});
    $routeProvider.when('/Bio', {templateUrl: 'partials/Bio', controller: MyCtrl1});
    $routeProvider.when('/Projects', {templateUrl: 'partials/Projects', controller: MyCtrl1});
    $routeProvider.when('/Blog', {templateUrl: 'partials/Blog', controller: MyCtrl1});
    $routeProvider.when('/Resume', {templateUrl: 'partials/Resume', controller: MyCtrl1});
    $routeProvider.when('/Sandbox', {templateUrl: 'partials/Sandbox', controller: MyCtrl1});

    $routeProvider.otherwise({redirectTo: '/view1'});
    $locationProvider.html5Mode(true);
  }]);


