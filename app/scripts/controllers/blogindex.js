'use strict';

window.alert("Hello, I'm currently re-design website layout. I'm very sorry for any trouble you may get. Please feel free to visit me if a few days and check for more superise! Thank you very much for visiting!");

angular.module('webappApp').controller('IndexblogCtrl', function ($scope,$http,$rootScope,$location,$modal,$route,$timeout) {

/********Slider********************/

	$scope.news = function(){
		$scope.selection = "news";
	}

	$scope.blogupdates = function(){
		$scope.selection = "blogupdates";
	}

/**************************Slide Show******
		$scope.slideshowInterval = 10000;
		var slides = $scope.slides = [];
		$scope.addSlide = function(){
			slides.push(
				{
				image:"https://lh6.googleusercontent.com/-TEGDRbiZCLA/S096hMWuokI/AAAAAAAAAAU/M7VnooWvwzM/s800/P1010073.JPG",
				text: "This is a test photo I took when I just begin my study in Ohio State. "
				},
				{
				image: "https://lh5.googleusercontent.com/-wwm5oKtJ3x4/U3YprShFMQI/AAAAAAAAAoU/URUlGyHf238/s800/WP_000216.jpg",
				text: "This is a test photo I took when I traved to Boston."
				})
		};
		for (var i=0; i<1; i++){
			$scope.addSlide();
		}
	**********************/
		$http.get('/api/blogs').success(function(data){
			$scope.blogs = data;
		});

/***************************************************************/
		$scope.deleteblog = function(id){
			$http.delete('/api/blog/' + id)
				.success(function(data){
					window.alert('Blog has been deleted!');
					$location.url('/blogoptions');
				}).error(function(err){
				window.alert(err);
		});
		};
/************************Read Blog***************************/

		$scope.getModal = function(getid){
			var modalInstance = $modal.open({
				templateUrl: 'readblog.html',
				controller: ReadblogCtrl,
				size:'lg',
				resolve:{
					readblog: function(){return $scope.blogs[getid-1];}
					}
		});


		$scope.ok = function(){
				$location.url('/home');};
				
		
	};

	var ReadblogCtrl = function($scope, $location, $sce, $modalInstance, readblog){
				console.log(readblog.content);

				$scope.renderHtml = function()
				{
					return $sce.trustAsHtml(readblog.content);
				};
				$scope.readtitle = readblog.title;
				$scope.readcontent = readblog.content;
				
		};

/***********************Edit Blog******************************/
		$scope.isCollapsed = true;

		$scope.editblog = function(id){

		$scope.isCollapsed = false;	
			
        $http.get('/api/blog/' + id)
            .success(function(data) {        		
                    $scope.form = data[0];
                });

		};

		$scope.doedit = function(id){
				$http.put('/api/blog/'+ id, $scope.form)
                .success(function(data){
                	$scope.isCollapsed = true;
                	$route.reload();
                })
                .error(function(error){
                	console.log(error);
                	$scope.isCollapsed = true;
                	$route.reload();
                })
            };
/***************************************************************/
		$scope.getadmin = function(){
		if($rootScope.currentUser !== null){
			if($rootScope.currentUser.name === "Pengyin Shan")
			{
				return true;
			}
			else{
				return false;
			}
		}
		else{
			return false;
		}
      };
/***************************************************************/
});
	