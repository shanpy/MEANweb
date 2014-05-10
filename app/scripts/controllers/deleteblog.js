'use strict';

angular.module('webappApp')
	.controller('DeleteblogCtrl', function ($scope,$http,$routeParams) {
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