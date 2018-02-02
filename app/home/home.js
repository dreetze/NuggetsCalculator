'use strict';

angular.module( 'myApp.home', [ 'ngRoute', 'firebase' ] )

// Declared route
.config( [ '$routeProvider', function( $routeProvider ) {
	$routeProvider.when( '/home', {
		templateUrl: 'home/home.html',
		controller: 'HomeCtrl'
	});
}])
 
// Home controller
.controller( 'HomeCtrl', [ '$scope', '$location', 'CommonProp', '$firebaseAuth', function( $scope, $location, CommonProp, $firebaseAuth ) {
	
	var auth = $firebaseAuth();

 	$scope.SignIn = function( $event ) {
 		//event.preDefault();
 		var username = $scope.user.email;
 		var password = $scope.user.password;

 		auth.signInEmailandPassword( { 
 			email: username,
 			password: password
 		})
 		.then( function( user ) {
 			console.log( 'Authentication Successfull' );
 			CommonProp.setUser(user.password.email);
 			$location.path( '/welcome' );
 		}, function( error ) {
 			console.log( 'Authentication Failure' )
 		});
 		//Auth Logic will be here
 	}

}])

.service( 'CommonProp', function() {
	var user = '';

	return {
		getUser: function() {
			return user;
		},
		setUser: function( value ) {
			user = value;
		}
	}
});
