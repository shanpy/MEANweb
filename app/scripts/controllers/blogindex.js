'use strict';

console.log("blogindex.js is called");

angular.module('webappApp').factory("blogservice", function($http){
	return {
		readbloginfo : function(id){
			$http.get('/api/blog/'+ id)
			.then(function(tem){
				console.log(tem[0]);
				return tem[0];
			});
		}
	};
}).controller('IndexblogCtrl', function ($scope,$http,$rootScope,$location,$modal,blogservice) {


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

		$scope.getModal = function(id){
		
			var modalInstance = $modal.open({
				templateUrl: 'readblog.html',
				controller: ReadblogCtrl,
				size:'lg',
				resolve:{
					blogtitle: function(){return blogservice.readbloginfo(id).title},
					blogcontent: function(){return blogservice.readbloginfo(id).content;}
				}
			});

			console.log(id);
		};

		
		$scope.getBlog = function(id){

			$http.get('/api/blog/'+ id)
			.success(function(data){
				console.log(data);
				return data;
			})
			.error(function(err){
			console.log(err);
			return null;
		});
		};

		/*
		$scope.checkCollapse = function(){

			if($scope.isCollapsed === true){
				$scope.isCollapsed = false;
				$scope.read= "Finish Reading";
			}
			else{$scope.isCollapsed = true;
				 $scope.read= "Read More";
				}
		}; */
/***********************Edit Blog******************************/
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
/***************************************************************/
});
	