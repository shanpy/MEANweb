'use strict';

angular.module('projectApp')
	.controller('DeleteblogCtrl', function ($scope,$http,$location,$routeParams) {
		 $http.get('/api/blog/' + $routeParams.id)
            .success(function(data) {
				console.log(JSON.stringify(data));
				$scope.blog = data.blogs;
			});

		$scope.deleteblog = function(){
			$http.delete('/api/blog/' + $routeParams.id)
				.success(function(data){
					$location.url('/blogoptions');
				});
		};

		$scope.home = function (){
			$location.url('/');
		};	
	});