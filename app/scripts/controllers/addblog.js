'use strict';

angular.module('webappApp')
	.controller('AddblogCtrl', function ($scope,$http,$location) {
		$scope.form = {};
		$scope.submitblog = function(){
			$http.post('/api/blog', $scope.form)
				.success(function(data){
					$location.path('/home');
				})
				.error(function(err){
					console.log(err);
				});
		};
	});