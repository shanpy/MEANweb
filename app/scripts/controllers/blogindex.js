'use strict';

console.log("blogindex.js is called");

angular.module('projectApp')
	.controller('IndexblogCtrl', function ($scope,$http,$rootScope) {

		$http.get('/api/blogs').success(function(data){
			$scope.blogs = data.blogs;
		});

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