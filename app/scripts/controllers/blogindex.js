'use strict';

console.log("blogindex.js is called");

angular.module('webappApp')
	.controller('IndexblogCtrl', function ($scope,$http,$rootScope,$location) {

		$http.get('/api/blogs').success(function(data){
			$scope.blogs = data;
		});

		$scope.deleteblog = function(id){
			$http.delete('/api/blog/' + id)
				.success(function(data){
					window.alert('Blog has been deleted!');
					$location.url('/blogoptions');
				}).error(function(err){
				window.alert(err);
		});
		};

		$scope.readblog = function(id){
			var show = document.getElementById("fullblog");

			$http.get('/api/blog/'+ id)
			.success(function(data){
			console.log(data);
			show.innerHTML = '<center>' + '<h3>'+ data[0].title + '</h3>' + '<p>' + data[0].content + '</p>' + '</center>';
		})
			.error(function(err){
				console.log(err);
				show.innerHTML="Sorry, we can't bring full version blog now...";
		});
		};

		$scope.editblog = function(id){
			
        $scope.form = {};
        $http.get('/api/blog/' + $routeParams.id)
            .success(function(response) {
                    console.log(JSON.stringify(response));
                    $scope.form = response.blogs;
                });

        $http.put('/api/blog/'+ $routeParams.id, $scope.form)
                .success(function(data){
                    $location.url('/home');
                });
		};

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