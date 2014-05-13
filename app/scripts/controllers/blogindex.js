'use strict';

console.log("blogindex.js is called");

angular.module('webappApp').factory('ReadblogFactory', ['$resource',function ($resource) {
    return $resource('/api/blogs/:id', {}, {
              read: { method: 'GET', params: { id: '@id' }}
            });
  }])
.service("blogservice", function($http){

		this.readbloginfo = function(id){
			var promise = $http.get('/api/blog/'+ id)
			.then(function(tem){
				console.log(tem.data);
				return tem.data;
			});
			return promise;
		}
}).controller('IndexblogCtrl', function ($scope,$http,$rootScope,$location,$modal,blogservice, $q, ReadblogFactory) {


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
		var read;
		ReadblogFactory.read({id:getid},function(data){
			console.log(data);
			read = data;});
       
        $scope.read2 = blogservice.readbloginfo(getid);


			console.log(read);
			console.log(read2(id));

			var modalInstance = $modal.open({
				templateUrl: 'readblog.html',
				controller: ReadblogCtrl,
				size:'lg',
				resolve:{
					readblog: function(){
						console.log(read(id));
						return read;}
				}
			});
		};

		
		var ReadblogCtrl = function($scope, $location, $modalInstance, readblog){
				console.log(readblog);
				$scope.read.title = readblog.title;
				$scope.read.content = readblog.content;
				
				$scope.ok = function(){
				$location.url('/home');}
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
	