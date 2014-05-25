setTimeout(function updateActiveMenu() {
	try 
	{
		// Arrumando active menu
	   var activeMenu = $('#menuList').find("[href='" + window.location.pathname + "']");
	   if (activeMenu.length == 0)
	   {
		   $($('#menuList').find("li")[1]).addClass('active');
	   }else {
		   $(activeMenu[0]).parent().addClass('active');
	   }
	   
	   // Escondendo conteudo
	   $('.some').hide();
	}
	catch(e)
	{}
	prettyPrint();
}, 100);

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

function getCssObj($scope) {
	
	var positionEnter = "";
	var positionFinal = "";
	var positionLeave = "";
	var transformStart = "";
	var transformEnd = "";
	var transformStartObj = {};
	var transformEndObj = {};
	
	if($scope.visible.scaley && $scope.scaleyEnabled) {
		transformStartObj["scaleY"] = TryParseInt($scope.scaley, 0) / 100;
		transformEndObj["scaleY"] = 1;
	}
	if($scope.visible.scalex && $scope.scalexEnabled) {
		transformStartObj["scaleX"] = TryParseInt($scope.scalex, 0) / 100;
		transformEndObj["scaleX"] = 1;
	}

	if($scope.visible.rotatex && $scope.rotatexEnabled) {
		transformStartObj["rotateX"] = TryParseInt($scope.rotatex, 0) + 'deg';
		transformEndObj["rotateX"] = 0 + 'deg';
	}
	if($scope.visible.rotatey && $scope.rotateyEnabled) {
		transformStartObj["rotateY"] = TryParseInt($scope.rotatey, 0) + 'deg';
		transformEndObj["rotateY"] = 0 + 'deg';
	}
	if($scope.visible.rotatez && $scope.rotatezEnabled) {
		transformStartObj["rotateZ"] = TryParseInt($scope.rotatez, 0) + 'deg';
		transformEndObj["rotateZ"] = 0 + 'deg';
	}

	if($scope.visible.translatex && $scope.translatexEnabled) {
		transformStartObj["translatex"] = TryParseInt($scope.translatex, 0) + 'px';
		transformEndObj["translatex"] = 0 + 'px';
	}
	if($scope.visible.translatey && $scope.translateyEnabled) {
		transformStartObj["translatey"] = TryParseInt($scope.translatey, 0) + 'px';
		transformEndObj["translatey"] = 0 + 'px';
	}
	if($scope.visible.translatez && $scope.translatezEnabled) {
		transformEndObj["translatez"] = transformStartObj["translatez"] = TryParseInt($scope.translatez, 0) + 'px';
	}
	
	if($scope.visible.skewx && $scope.skewxEnabled) {
		transformStartObj["skewX"] = TryParseInt($scope.skewx, 0) + 'deg';
		transformEndObj["skewX"] = 0 + 'deg';
	}
	if($scope.visible.skewy && $scope.skewyEnabled) {
		transformStartObj["skewY"] = TryParseInt($scope.skewy, 0) + 'deg';
		transformEndObj["skewY"] = 0 + 'deg';
	}

	
	if(!isEmpty(transformStartObj)) {
		transformStart = getTransform(transformStartObj);
		transformEnd = getTransform(transformEndObj);
	}
	
	switch ($scope.position) {
		case "Top":
			positionEnter = "top: -100%";
			positionFinal = "top: 0";
			positionLeave = "top: 100%";
			break;
		case "Bottom":
			positionEnter = "top: 100%";
			positionFinal = "top: 0";
			positionLeave = "top: -100%";
			break;
		case "Left":
			positionEnter = "left: -100%";
			positionFinal = "left: 0";
			positionLeave = "left: 100%";
			break;
		case "Right":
			positionEnter = "left: 100%";
			positionFinal = "left: 0";
			positionLeave = "left: -100%";
			break;
	}
	
	return {
		time: TryParseInt($scope.time, 1000) + 'ms',
		easing: 'cubic-bezier(' + $scope.easing + ')',
		position: $scope.position.toLowerCase(),
		positionvalue: '-50px',
		transformStart: transformStart,
		transformEnd: transformEnd,
		positionEnter: positionEnter,
		positionFinal: positionFinal,
		positionLeave: positionLeave
	}; 
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

function getRandomInt(max){
	return Math.floor(Math.random() * max);
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
	
