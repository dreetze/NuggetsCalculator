'use strict';

angular.module( 'myApp.addResource', [ 'ngRoute' ] )

.config( [ '$routeProvider', function( $routeProvider ) {
	$routeProvider.when( '/addResource', {
		templateUrl: 'addResource/addResource.html',
		controller: 'AddResourceCtrl'
	});
}])

.controller( 'AddResourceCtrl', [ '$scope', function( $scope ) {
	var config = {
		apiKey: "AIzaSyBHlRb6JB-GhYuRyWpJSRyB2WEzpF7o2-w",
		authDomain: "nuggets-project.firebaseapp.com",
		databaseURL: "https://nuggets-project.firebaseio.com"
	};
	firebase.initializeApp(config);
	var rootRef = firebase.database().ref();

	var title = $scope.resource.title;
	var factor = $scope.resource.factory;

	fb.$push( {
		title: title,
		factor: factor

	} ).then( function( ref ) {
		console.log( ref );

	}, function( error ) {
		console.log( "Error:", error );

	});

}]);