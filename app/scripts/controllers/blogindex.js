'use strict';

console.log("blogindex.js is called");

angular.module('webappApp')
	.controller('IndexblogCtrl', function ($scope,$http,$rootScope,id) {

		$http.get('/api/blogs').success(function(data){
			$scope.blogs = data;
		});

		$scope.deleteblog = function(){
			$http.delete('/api/blog/' + $scope.blog.id)
				.success(function(data){
					$location.url('/blogoptions');
				});
		};

		$scope.readblog = function(id){

			$http.get('/api/blog/'+ id)
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