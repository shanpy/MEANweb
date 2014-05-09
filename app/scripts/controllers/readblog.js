'use strict';

angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http,$location,$routeParams) {
	


    console.log("readblog.js is called");

	$http.get('/api/blog/'+ $routeParams.id)
		.success(function(data){
			$scope.blog = data.blogs;
		});
	});