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
			if($scope.isCollapsed == true){
				$scope.isCollapsed = false;
			}
			else{$scope.isCollapsed = true;}

			var show = document.getElementById("fullblog");

			$http.get('/api/blog/'+ id)
			.success(function(data){
			show.innerHTML = '<center>' + '<h5>'+ data[0].title + '</h5>' + '</center>' 
							+ '<p>' + data[0].content + '</p>' ;
		})
			.error(function(err){
				console.log(err);
				show.innerHTML="Sorry, we can't bring full version blog now...";
		});
		};
/***************************************************************/
		$scope.editblog = function(id){
			
		var editpart = document.getElementById('editblog');
		editpart.innerHTML = 
      '<input ng-model="edit.title"/>'+
      '<input ng-model="edit.introduction"/>' + 
      '<input ng-model="edit.content"/>'
      '<button ng-click="doedit(edit.id)">Finish Edit</button>';

        $http.get('/api/blog/' + id)
            .success(function(data) {
            		$scope.edit.id = response[0].id;
                    $scope.edit.title = response[0].title;
                    $scope.edit.introduction = response[0].introduction;
                    $scope.edit.title = response[0].content;
                });

        $scope.doedit = function(id){$http.put('/api/blog/'+ id, $scope.edit)
                .success(function(data){
                	editpart.innerHTML="";
                    $location.url('/home');
                })
                .error(function(error){
                	$location.url('/home');
                })
            };
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