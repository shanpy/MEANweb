'use strict';
var ReadblogCtrl = function($scope, $location, $modalInstance, fullblog){

				console.log(fullblog);

				$scope.blog.title = blog.title;
				$scope.blog.content = blog.content;
				$scope.blog.date = blog.date;
				
				$scope.back = function(){
				$location.url('/home');}
		};