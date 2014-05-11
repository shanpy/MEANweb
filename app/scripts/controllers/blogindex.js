'use strict';

console.log("blogindex.js is called");

angular.module('webappApp')
	.controller('IndexblogCtrl', function ($scope,$http,$rootScope,$location) {

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
/***************************************************************/
		$scope.read.button = "Read More";

		$scope.readblog = function(id){
			var show = document.getElementById("fullblog");
			$http.get('/api/blog/'+ id)
			.success(function(data){
			if($scope.isCollapsed == true){
			show.innerHTML = '<center>' + '<h5>'+ data[0].title + '</h5>' + '</center>' 
							+ '<p>' + data[0].content + '</p>' ;
		}})
			.error(function(err){
			console.log(err);
			show.innerHTML="Sorry, we can't bring full version blog now...";
		});
		};

		$scope.checkCollapse = function(){
			if($scope.isCollapsed == true){
				$scope.
				$scope.isCollapsed = false;
				$scope.read.button= "Finish Reading";
			}
			else{$scope.isCollapsed = true;
				 $scope.read.button= "Read More"}
		}; 
/***************************************************************/
		$scope.editblog = function(id){
			
        $http.get('/api/blog/' + id)
            .success(function(data) {
            		console.log(data);
                    $scope.form = data[0];
                });

		};

		$scope.doedit = function(id){
				$http.put('/api/blog/'+ id, $scope.form)
                .success(function(data){
                	console.log(data);
                    $location.url('/home');
                })
                .error(function(error){
                	console.log(error);
                	$location.url('/home');
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

    });