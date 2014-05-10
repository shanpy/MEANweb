'use strict';

angular.module('webappApp')
	.controller('SendemailCtrl', function ($scope,$http,$location $routeParams) {
		$scope.form = {};
		$scope.sendemail = function(){
			console.log('$scope.form');
			$http.post('/api/sendemail'+ $routeParams.id, $scope.form)
				.success(function(data){
					window.alert("Thank you very much for email!")
					$location.path('/home');
				});
		};
	});