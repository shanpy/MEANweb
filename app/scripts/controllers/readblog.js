'use strict';

angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http) {
	
	console.log($scope.introduction);
	console.log($scope.blogs);

	$http.get('/api/blog0')
		.success(function(data){
			console.log(data);
			$scope.blog.title= data.title;
		});
	});