'use strict';

console.log("blogindex.js is called");

angular.module('webappApp')
	.controller('IndexblogCtrl', function ($scope,$http,$rootScope) {

		$http.get('/api/blogs').success(function(data){
			$scope.blogs = data;
		});

		$scope.deleteblog = function(){
			console.log($scope.title);
			$http.delete('/api/blog/' + $scope.blog.id)
				.success(function(data){
					$location.url('/blogoptions');
				});
		};

		$scope.getadmin = function(){
		if($rootScope.currentUser !== null){
			if($rootScope.currentUser.name === "Pengyin Shan")
			{
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
      };

    });