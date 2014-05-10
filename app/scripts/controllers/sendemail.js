'use strict';

angular.module('webappApp')
	.controller('SendemailCtrl', function ($scope,$http,$location) {
		$scope.form = {};
		$scope.sendemail = function(){
			console.log($scope.form);
			$scope.form.to="shanpy901115@gmail.com";
			$http.post('/api/sendemail', $scope.form)
				.success(function(data){
					window.alert("Thank you very much for email!")
					$location.path('/home');
				});
		};
	});