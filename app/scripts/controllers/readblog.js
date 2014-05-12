'use strict';


angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http,$location,blog) {
	
	$scope.blog = blog;

	$scope.back = function(){
		$location.url('/home');
	};
	});