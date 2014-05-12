'use strict';
var ReadblogCtrl = function($scope, $location, $modalInstance, blog){

				console.log("readblog.js");

				$scope.blog = blog;
				
				$scope.back = function(){
				$location.url('/home');}
		};