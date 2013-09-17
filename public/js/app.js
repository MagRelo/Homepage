'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/demos', {templateUrl: 'partials/Demos', controller: AboutCtrl});
    $routeProvider.when('/bio', {templateUrl: 'partials/Bio', controller: AboutCtrl});
    $routeProvider.when('/resume', {templateUrl: 'partials/Resume', controller: ResumeCtrl});
    $routeProvider.when('/main', {templateUrl: 'partials/Thumbs', controller: ResumeCtrl});
    $routeProvider.when('/grid', {templateUrl: 'partials/Grid', controller: GridCtrl});
    $routeProvider.otherwise({redirectTo: '/main'});
    $locationProvider.html5Mode(true);
  }]);


