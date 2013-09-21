'use strict';


// Declare app level module which depends on filters, and services
angular.module('mattLovan', ['mattLovan.directives', 'mattLovan.services']).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/consulting', {templateUrl: 'partials/Consulting'});
    $routeProvider.when('/blog', {templateUrl: 'partials/Blog'});
    $routeProvider.when('/demos', {templateUrl: 'partials/Demos'});
    $routeProvider.when('/contact', {templateUrl: 'partials/Contact'});
    $routeProvider.when('/grid', {templateUrl: 'partials/Grid', controller: GridCtrl});
    $routeProvider.when('/leaderboard', {templateUrl: 'partials/leaderboard', controller: leaderboardCtrl});
    $routeProvider.otherwise({redirectTo: '/consulting'});
    $locationProvider.html5Mode(true);
  }]);


