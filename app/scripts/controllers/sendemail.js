'use strict';

angular.module('webappApp')
	.controller('SendemailCtrl', function ($scope,$http,$location) {
		$scope.form = {};
		$scope.sendemail = function(){
			console.log('sendemail.js is called');
			$http.post('/api/sendemail', $scope.form)
				.success(function(data){
					window.alert("Thank you very much for email!")
					$location.path('/home');
				});
		};
	});