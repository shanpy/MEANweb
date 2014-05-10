'use strict';

angular.module('webappApp')
	.controller('AddblogCtrl', function ($scope,$http,$location) {
		$scope.form = {};
		$scope.submitblog = function(){
			$http.post('/api/blog', $scope.form)
				.success(function(data){
					console.log(data);
					$location.path('/home');
				});
		};
	});