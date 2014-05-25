'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {

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


	$scope.currentIndex = 0;	
	$scope.setCurrentSlideIndex = function (index){
		$scope.currentIndex = index;
	};
	$scope.isCurrentSlideIndex = function (index){
		return $scope.currentIndex === index;
	};
	

	$scope.next = function (){
		 $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
		console.log("After click: " + $scope.currentIndex);
	};
	$scope.prev = function (){
		$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
		console.log("After click: " + $scope.currentIndex);
	};


	$scope.watch('currentIndex', function(){
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
		$scope.slides[$scope.currentIndex].visible = true;
	});

}).animation('.slide-animation',function(){
	return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    // ANIMATION CODE GOES HERE                    
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    // ANIMATION CODE GOES HERE
                }
                else {
                    done();
                }
            }
        };
});
