'use strict';

console.log("blogindex.js is called");

angular.module('webappApp')
	.controller('IndexblogCtrl', function ($scope,$ChildScope,$http,$rootScope) {

		$http.get('/api/blogs').success(function(data){
			$scope.blogs = data;
		});

		$scope.deleteblog = function(){
			$http.delete('/api/blog/' + $scope.blog.id)
				.success(function(data){
					$location.url('/blogoptions');
				});
		};

		$scope.readblog = function(){

			//console.log($scope.blog.title);
			//console.log($scope.title);
			//console.log($scope.blog.title);
			console.log($scope.blogs[0].title);
			console.log($ChildScope.title);
			console.log($ChildScope.blog);

			$http.get('/api/blog/'+ $scope.id)
			.success(function(data){
			console.log(data);
			$scope.title= data.title;
		});
		}

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