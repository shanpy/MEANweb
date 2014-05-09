'use strict';

angular.module('projectApp')
	.controller('AddblogCtrl', function ($scope,$http,$location) {
		$scope.form = {};
		$scope.submitblog = function(){
			$http.post('/api/blog', $scope.form)
				.success(function(data){
					$location.path('/home');
				});
		};
	});