'use strict';

angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http) {
	
    console.log("readblog.js is called");

	$http.get('/api/blog/'+ $scope.blog.id)
		.success(function(data){
			$scope.blog = data;
		});
	});