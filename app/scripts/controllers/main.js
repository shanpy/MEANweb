'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {

  	$scope.slides = [
  	{
  		src : "./app/images/blogupdate/5-22.png",
  		title : "Website Old Layout",
  		content: "<p>During the week of May 26th, 2014, I re-designed website layout.</p><p>Screenshot on left is how website looks previously.</p><p>I really like this design and I decide to continue using it in blog section.</p>"

  	},
  	{
  		src : "./app/images/blogupdate/campus.jpg",
  		title : "The pros and cons of using photo as website background",
  		content: "<p>I used to try using good photos as website ground and went to OSU campus for some beautiful photos. However after I made them backgrounds, it turns out to be too colorful for my website.</p>"+
  				"<p>For pages with lots of paragraph, photo background really make things too complex.</p>"+
  				"<p>So my conclusion is: For any website that only have a few words on it(for example, a homepage with only header and nav bar), photo background can make it really stylish. If a page has lots of content, a simple background will be easier for user to read.</p>"
  	}
  	];


	$scope.currentIndex = {index:0};
	$scope.slides[$scope.currentIndex.index].visible = true;
	
	$scope.next = function (){
		$scope.currentIndex.index = ($scope.currentIndex.index > 0) ? --$scope.currentIndex.index : $scope.slides.length - 1;
	};
	$scope.prev = function (){
		if($scope.currentIndex.index < $scope.slides.length - 1){
			var tmp = $scope.currentIndex.index;
			tmp++;
			$scope.currentIndex.index = tmp;
		}
		else{
			$scope.currentIndex.index = 0;
		}
	};


	$scope.$watchCollection('currentIndex', function(){
		$scope.slides.forEach(function(slide){
			slide.visible = false;
		});
		$scope.slides[$scope.currentIndex.index].visible = true;
	});

	var timer;
	var sliderFunc = function() {
	  timer = $timeout(function() {
	    $scope.next();
	    timer = $timeout(sliderFunc, 8000);
	  }, 8000);
	};
	sliderFunc(); 
	$scope.$on('$destroy', function() {
	  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
	});

	$scope.stop = function(){
	$timeout.cancel(timer);
	};
});
