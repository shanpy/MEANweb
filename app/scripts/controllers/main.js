'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {

  	$scope.slides = [
  	{
  		src : "./app/images/5-22.png",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 1.",
  		index : 0

  	},
  	{
  		src : "./app/images/template.jpg",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 2.",
  		index: 1
  	}
  	];


	$scope.currentIndex = 0;
	$scope.slides[$scope.currentIndex].visible = true;
	
	$scope.next = function (){
		$scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
		console.log("After click: " + $scope.currentIndex);
	};
	$scope.prev = function (){
		console.log("Before click: " + $scope.currentIndex);
		if($scope.currentIndex < $scope.slides.length - 1){
			var tmp = $scope.currentIndex;
			tmp++;			
			console.log(tmp);
			$scope.currentIndex = tmp;
			console.log($scope.currentIndex);
		}
		else{
			$scope.currentIndex = 0;
		}
		console.log("After click: " + $scope.currentIndex);
	};


	$scope.watch('currentIndex', function(){
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
		$scope.slides[$scope.currentIndex].visible = true;
	});

});
