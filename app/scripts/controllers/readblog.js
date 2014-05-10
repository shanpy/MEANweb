'use strict';

angular.module('webappApp')
	.controller('ReadblogCtrl', function ($scope,$http) {
	
    console.log($scope);

	$http.get('/api/blog/'+ $scope.id)
		.success(function(data){
			console.log(data);
			$scope.title= data.title;
		});
	});