'use strict';

console.log("blogindex.js is called");

angular.module('webappApp')
	.controller('IndexblogCtrl', function ($scope,$http,$rootScope) {

		$http.get('/api/blogs').success(function(data){
			//return data as an object
			console.log(data);
			$scope.blogs = data;
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