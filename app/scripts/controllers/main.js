'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {
  	
	$scope.currentIndex = 0;

  	$scope.slides = [
  	{
  		src : "./app/images/bird.png",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 1."

  	},
  	{
  		src : "./app/images/template.jpg",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 2."
  	}
  	];

	$scope.next = function (){
		console.log("1: " + $scope.currentIndex);
		if($scope.currentIndex < $scope.slides.length - 1){
			$scope.currentIndex = $scope.currentIndex + 1;
			console.log("5: " + $scope.currentIndex);
		} 
		else{$scope.currentIndex = 0;}
		console.log("2: " + $scope.currentIndex);
	};
	$scope.prev = function (){
		console.log("3: " + $scope.currentIndex);
		$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.slides.length - 1;
		console.log("4: " + $scope.currentIndex);
	};
	$scope.watch('currentIndex', function(){
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
		$scope.slides[$scope.currentIndex].visible = true;
	});


	/*
	var timer;
	var sliderFunc = function() {
	  timer = $timeout(function() {
	    timer = $timeout(sliderFunc, 5000);    
	    $scope.next();
	  }, 5000);
	};
	sliderFunc();	 
	$scope.$on('$destroy', function() {
	  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
	});*/
});
