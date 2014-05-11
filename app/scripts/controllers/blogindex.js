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
		$scope.readblog = function(id){

			var show = document.getElementById("fullblog");

			$http.get('/api/blog/'+ id)
			.success(function(data){
			if($scope.isCollapsed == true){
				$scope.isCollapsed = false;
			}
			else{$scope.isCollapsed = true;}
			show.innerHTML = '<center>' + '<h5>'+ data[0].title + '</h5>' + '</center>' 
							+ '<p>' + data[0].content + '</p>' ;
		})
			.error(function(err){
			console.log(err);
			if($scope.isCollapsed == true){
				$scope.isCollapsed = false;
			}
			else{$scope.isCollapsed = true;}
			show.innerHTML="Sorry, we can't bring full version blog now...";
		});
		};
/***************************************************************/
		$scope.editblog = function(id){
			
		var editpart = document.getElementById('editblog');
		editpart.innerHTML = 
      '<input ng-model="title"/>'+
      '<input ng-model="introduction"/>' + 
      '<input ng-model="content"/>' +
      '<button ng-click="doedit(blog.id)">Finish Edit</button>';

        $http.get('/api/blog/' + id)
            .success(function(data) {
            		console.log(data);
            		$scope.id = data[0].id;
                    $scope.title = data[0].title;
                    $scope.introduction = data[0].introduction;
                    $scope.content = data[0].content;
                });

		};

		$scope.doedit = function(id){
				console.log("doedit is called");
				$http.put('/api/blog/'+ id, $scope.content)
                .success(function(data){
                	console.log(data);
                	editpart.innerHTML="";
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