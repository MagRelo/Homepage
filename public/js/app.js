'use strict';

// Declare app level module which depends on filters, and services
angular.module('mattLovan', ['mattLovan.directives', 'mattLovan.services', 'mattLovan.filters', 'ui.bootstrap', 'ngRoute', 'ngAnimate','AngularGM', 'uiSlider' ]).
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider.when('/consulting', {templateUrl: 'partials/Consulting2'});
    $routeProvider.when('/blog', {templateUrl: 'partials/Blog'});
    $routeProvider.when('/demos', {templateUrl: 'partials/Demos'});
    $routeProvider.when('/contact', {templateUrl: 'partials/Contact'});
    $routeProvider.when('/grid', {templateUrl: 'demos/Grid', controller: GridCtrl});
    $routeProvider.when('/leaderboard', {templateUrl: 'demos/leaderboard', controller: leaderboardCtrl});
    $routeProvider.when('/maps', {templateUrl: 'demos/maps', controller: mapCtrl});
    $routeProvider.otherwise({redirectTo: '/blog'});
    $locationProvider.html5Mode(true);
  }]);


