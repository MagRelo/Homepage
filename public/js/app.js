'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/About', {templateUrl: 'partials/About', controller: AboutCtrl});
    $routeProvider.when('/about', {templateUrl: 'partials/About', controller: AboutCtrl});
    $routeProvider.when('/Projects', {templateUrl: 'partials/Projects'});
    $routeProvider.when('/projects', {templateUrl: 'partials/Projects'});
    $routeProvider.when('/Resume', {templateUrl: 'partials/Resume', controller: ResumeCtrl});
    $routeProvider.when('/resume', {templateUrl: 'partials/Resume', controller: ResumeCtrl});
    $routeProvider.otherwise({redirectTo: '/about'});
    $locationProvider.html5Mode(true);
  }]);


