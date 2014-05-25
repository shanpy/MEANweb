'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {
  	
  	$scope.slides = [
  	{
  		img : "./app/images/bird.png",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 1."

  	},
  	{
  		img : "./app/images/template.jpg",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 2."
  	}
  	];
	

	$scope.currentIndex = 0;
	$scope.next = function (){
		$scope.currentIndex < $scope.slides.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
	};
	$scope.prev = function (){
		$scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.slides.length - 1;
	};
	$scope.watch('currentIndex', function(){
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
	});
	$scope.slides[$scope.currentIndex].visible = true;


	var timer;
	var sliderFunc = function() {
	  timer = $timeout(function() {
	    $scope.next();
	    timer = $timeout(sliderFunc, 5000);
	  }, 5000);
	};
	sliderFunc();	 
	$scope.$on('$destroy', function() {
	  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
	});
});
