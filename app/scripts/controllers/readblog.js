'use strict';
console.log("readblog.js");
var ReadblogCtrl = function($scope, $location, $modalInstance, blog){
				$scope.blog = blog;
				
				$scope.back = function(){
				$location.url('/home');
		}
		};