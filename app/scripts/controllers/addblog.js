'use strict';

angular.module('webappApp')
	.controller('AddblogCtrl', function ($scope,$http,$location) {
		$scope.form = {};
		$scope.$watch('content', function(v){
			console.log("content change");
			$scope.form.content = v;
		});
		$scope.submitblog = function(){
			$http.post('/api/blog', $scope.form)
				.success(function(data){
					$location.path('/home');
				})
				.error(function(err){
					window.alert("Please check id!");
				});
		};
	});