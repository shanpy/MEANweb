'use strict';

angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,Blog,$http) {
	console.log(Blog);
    $scope.blog = Blog;

	$http.get('/api/blog/'+ $scope.blog.id)
		.success(function(data){
			console.log(data);
			$scope.blog.title= data.title;
		});
	});