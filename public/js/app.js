'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', ['myApp.directives']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/demos', {templateUrl: 'partials/Demos'});
    $routeProvider.when('/bio', {templateUrl: 'partials/Bio'});
    $routeProvider.when('/resume', {templateUrl: 'partials/Resume'});
    $routeProvider.when('/main', {templateUrl: 'partials/Thumbs'});
    $routeProvider.when('/grid', {templateUrl: 'partials/Grid', controller: GridCtrl});
    $routeProvider.otherwise({redirectTo: '/main'});
    $locationProvider.html5Mode(true);
  }]);


