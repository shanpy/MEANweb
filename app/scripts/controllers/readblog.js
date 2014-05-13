'use strict';
var ReadblogCtrl = function($scope, $location, $modalInstance, readblog){

				console.log(readblog);	
				$scope.back = function(){
				$location.url('/home');}
		};