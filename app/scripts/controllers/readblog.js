'use strict';
var ReadblogCtrl = function($scope, $location, $modalInstance, blogtitle, blogcontent){

				console.log(blogtitle);	
				$scope.back = function(){
				$location.url('/home');}
		};