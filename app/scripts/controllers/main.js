'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {
  	
  	function getRandomInt(max){
	return Math.floor(Math.random() * max);
}
	function applyCss(css) {
	$('#tmpStyle').remove();
	$('body').append('<style id="tmpStyle">' + css + '</style>');
	var newcss = css.replace(/\t/g, '    ');
	$('#csscode').html("<pre class='prettyprint linenums lang-css'>" + newcss + "</pre>");
	prettyPrint();
}


  	$scope.ready="true";
  	$scope.article="1";


  $scope.autoChanges = true;
	$scope.time = '400';
	$scope.easing = '0.250, 0.250, 0.750, 0.750';
	$scope.position = 'Top';
	$scope.scaley = '0';
	$scope.scaleyEnabled = true;
	$scope.scalex = '0';
	$scope.scalexEnabled = false;
	$scope.rotatey = '90';
	$scope.rotateyEnabled = false;
	$scope.rotatex = '90';
	$scope.rotatexEnabled = true;
	$scope.rotatez = '90';
	$scope.rotatezEnabled = true;
	$scope.translatex = '0';
	$scope.translatexEnabled = false;
	$scope.translatey = '0';
	$scope.translateyEnabled = false;
	$scope.translatez = '30';
	$scope.translatezEnabled = true;
	$scope.skewx = '45';
	$scope.skewxEnabled = true;
	$scope.skewy = '30';
	$scope.skewyEnabled = true;
	
	
	if(typeof getVisibleOpts != 'undefined'){
		$scope.visible = getVisibleOpts();
	}
	
	if(typeof setIniValues != 'undefined') {
		setIniValues($scope);
	}
	
	function watchFn() {
		applyCss(generateCss(getCssObj($scope)))
	}
	
	$scope.$watch('time', watchFn);
	$scope.$watch('easing', watchFn);
	$scope.$watch('position', watchFn);
	$scope.$watch('scalex', watchFn);
	$scope.$watch('scalexEnabled', watchFn);
	$scope.$watch('scaley', watchFn);
	$scope.$watch('scaleyEnabled', watchFn);
	$scope.$watch('rotatex', watchFn);
	$scope.$watch('rotatexEnabled', watchFn);
	$scope.$watch('rotatey', watchFn);
	$scope.$watch('rotateyEnabled', watchFn);
	$scope.$watch('translatex', watchFn);
	$scope.$watch('translatexEnabled', watchFn);
	$scope.$watch('translatey', watchFn);
	$scope.$watch('translateyEnabled', watchFn);
	$scope.$watch('translatez', watchFn);
	$scope.$watch('translatezEnabled', watchFn);
	$scope.$watch('rotatex', watchFn);
	$scope.$watch('rotatexEnabled', watchFn);
	$scope.$watch('skewx', watchFn);
	$scope.$watch('skewxEnabled', watchFn);
	$scope.$watch('skewy', watchFn);
	$scope.$watch('skewyEnabled', watchFn);
	
	
	$timeout(function() {
		applyCss(generateCss(getCssObj($scope)));
	} , 100);
	
	$scope.showCss = function () {
		alert(generateCss(getCssObj($scope)));
	}	

	$scope.openPlunker = function () {
		openPlunker(generateCss(getCssObj($scope)));
	}
	
	function doSomething() {
		if($scope.autoChanges && $('.modal:visible').length == 0){
			switch($scope.article){
			case "1":
				$scope.article = "2";
				break;
			case "2":
				$scope.article = "1";
				break;
			default:
				$scope.article = "1";
			}
		}
		$timeout(doSomething, 1500 + getRandomInt(1000) + TryParseInt($scope.time, 1000));	  	  
	}
	$timeout(doSomething, 1500 + getRandomInt(1000) + TryParseInt($scope.time, 1000));
	
});
