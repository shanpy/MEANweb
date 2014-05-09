'use strict';


angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http,$location,$routeParams) {
	
	$http.get('/api/blog/'+ $routeParams.id)
		.success(function(data){
			$scope.blog = data.blogs;
		});
	$scope.back = function(){
		$location.url('/home');
	};
	});