'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/about', {templateUrl: 'partials/About', controller: AboutCtrl});
    $routeProvider.when('/resume', {templateUrl: 'partials/Resume', controller: ResumeCtrl});
    $routeProvider.when('/main', {templateUrl: 'partials/Thumbs', controller: ResumeCtrl});
    $routeProvider.otherwise({redirectTo: '/main'});
    $locationProvider.html5Mode(true);
  }]);


