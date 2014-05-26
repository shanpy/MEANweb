'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {

  	$scope.slides = [
  	{
  		src : "./app/images/5-22.png",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 1."

  	},
  	{
  		src : "./app/images/template.jpg",
  		title : "This is a test for blog update",
  		content: "This is a test graph for blog update 2."
  	}
  	];


	$scope.currentIndex = {index:0};
	$scope.slides[$scope.currentIndex.index].visible = true;
	
	$scope.next = function (){
		$scope.currentIndex.index = ($scope.currentIndex.index > 0) ? --$scope.currentIndex.index : $scope.slides.length - 1;
	};
	$scope.prev = function (){
		console.log("Before click: " + $scope.currentIndex.index);
		if($scope.currentIndex.index < $scope.slides.length - 1){
			var tmp = $scope.currentIndex.index;
			tmp++;
			$scope.currentIndex.index = tmp;
		}
		else{
			$scope.currentIndex.index = 0;
		}
	};


	$scope.watch('currentIndex', function(){
		console.log("$watch work!");
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
		$scope.slides[$scope.currentIndex.index].visible = true;
	});

});
