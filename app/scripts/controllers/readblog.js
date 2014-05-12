'use strict';
var ReadblogCtrl = function($scope, $location, $modalInstance, blog){

				console.log(blog.title);	
				$scope.back = function(){
				$location.url('/home');}
		};