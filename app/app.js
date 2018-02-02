'use strict';

// Declare app level module which depends on views, and components
angular.module( 'myApp', [
  'ngRoute',
  'myApp.home',
  'myApp.welcome'
]).
config( [ '$routeProvider', function( $routeProvider ) {

  $routeProvider.otherwise({redirectTo: '/home'});

  //All routes will be here
  
}]);