'use strict';
var ReadblogCtrl = function($scope, $location, $modalInstance, blog){

				console.log(blog);

				$scope.blog.title = blog.title;
				$scope.blog.content = blog.content;
				$scope.blog.date = blog.date;
				
				$scope.back = function(){
				$location.url('/home');}
		};