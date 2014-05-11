'use strict';

angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http) {
	
    console.log($scope.title);
    console.log($scope.blogs[0].title);

	$http.get('/api/blog/'+ $scope.id)
		.success(function(data){
			console.log(data);
			$scope.title= data.title;
		});
	});