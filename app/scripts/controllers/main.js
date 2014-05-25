'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {
  	
	var currentIndex = 0;

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
		console.log("1: " + currentIndex);
		if(currentIndex < $scope.slides.length - 1){
			currentIndex = $currentIndex + 1;
			console.log("5: " + currentIndex);
		} 
		else{currentIndex = 0;}
		console.log("2: " + currentIndex);
	};
	$scope.prev = function (){
		console.log("3: " + currentIndex);
		currentIndex > 0 ? currentIndex-- : currentIndex = $scope.slides.length - 1;
		console.log("4: " + currentIndex);
	};
	$scope.watch('currentIndex', function(){
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
		$scope.slides[currentIndex].visible = true;
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
