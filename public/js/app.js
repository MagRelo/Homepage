'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/consulting', {templateUrl: 'partials/Consulting'});
    $routeProvider.when('/blog', {templateUrl: 'partials/Blog'});
    $routeProvider.when('/demos', {templateUrl: 'partials/Demos'});
    $routeProvider.when('/contact', {templateUrl: 'partials/Contact'});
    $routeProvider.when('/grid', {templateUrl: 'partials/Grid', controller: GridCtrl});
    $routeProvider.otherwise({redirectTo: '/consulting'});
    $locationProvider.html5Mode(true);
  }]);


