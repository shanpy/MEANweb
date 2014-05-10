'use strict';

angular.module('webappApp')
	.controller('SendemailCtrl', function ($scope,$http,$location) {

		$scope.form = {};
		$scope.sendemail = function(){
			$scope.form.to="shanpy901115@gmail.com";
			document.getElementById('sendemailprocess').innerHTML="In process of sending out your email. Website will inform you when it is ready:)";
			$http.post('/api/sendemail', $scope.form)
				.success(function(data){
					window.alert("Thank you very much for email!");
					$location.path('/home');
				})
				.error(function(data){
					window.alert("Thank you very much for email!");
					$location.path('/home');
				});
		};
		$scope.cancel=function(){
			$location.path('/home');
		};
	});