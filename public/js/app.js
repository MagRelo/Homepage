'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/Bio', {templateUrl: 'partials/Bio'});
    $routeProvider.when('/Projects', {templateUrl: 'partials/Projects'});
    $routeProvider.when('/Resume', {templateUrl: 'partials/Resume', controller: ResumeCtrl});
    $routeProvider.otherwise({redirectTo: '/Bio'});
    $locationProvider.html5Mode(true);
  }]);


