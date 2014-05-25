'use strict';

angular.module('webappApp')
  .controller('MainCtrl', function ($scope, $http, $timeout,$animate) {
  	
  	/**This part is taken from http://www.nganimate.org/js/common.js. Special Thanks!**/
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

	function getTransform(obj) {
	var ret = "";
	for(var x in obj){
		ret += " " + x + "(" + obj[x] + ")";
	}
	
	return "\n\
    -webkit-transform:" + ret + ";\n\
    -moz-transform:" + ret + ";\n\
    -ms-transform:" + ret + ";\n\
    -o-transform:" + ret + ";\n\
    transform:" + ret + ";";
}


function isEmpty(obj){
   for(var i in obj) {return false;}
   return true;
}

function generateCss(obj) {
	var cssText = $('varcss').text();
	for(var key in obj){
		cssText = cssText.replace(new RegExp('#' + key + '#', 'gi'), obj[key]);
	}
	return cssText;
}



function TryParseInt(str, defaultValue){     
	var retValue = defaultValue;     
	if(str!=null){         
		if(str.length>0){             
			if (!isNaN(str)){                 
				retValue = parseInt(str);             
			}         
		}    
	}     
	return retValue; 
}

function formPostData(url, fields) {
	var form = angular.element('<form style="display: none;" method="post" action="' + url + '" target="_blank"></form>');
	angular.forEach(fields, function(value, name) {
	  var input = angular.element('<input type="hidden" name="' +  name + '">');
	  input.attr('value', value);
	  form.append(input);
	});
	$('body').append(form);
	form[0].submit();
	form.remove();
}


/****************************************************/

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
