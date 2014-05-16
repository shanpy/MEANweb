'use strict';

console.log("blogindex.js is called");

angular.module('webappApp').controller('IndexblogCtrl', function ($scope,$http,$rootScope,$location,$modal,$route) {

/**************************Slide Show****************************/
		$scope.slideshowInterval = 5000;
		var slides = $scope.slides = [];
		$scope.addSlide = function(){
			slides.push(
				{
				image:"https://lh6.googleusercontent.com/-TEGDRbiZCLA/S096hMWuokI/AAAAAAAAAAU/M7VnooWvwzM/s800/P1010073.JPG"
				text: "This is a test photo I took when I just begin my study in Ohio State. "
				},
				{
				image: "https://lh5.googleusercontent.com/-wwm5oKtJ3x4/U3YprShFMQI/AAAAAAAAAoU/URUlGyHf238/s800/WP_000216.jpg"
				text: "This is a test photo I took when I traved to Boston."
				})
		};
		for (var i=0; i<2; i++){
			$scope.addSlide();
		}

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
	