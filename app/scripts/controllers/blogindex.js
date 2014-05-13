'use strict';

console.log("blogindex.js is called");

angular.module('webappApp').factory('ReadblogFactory', ['$resource',function ($resource) {
    var result = {};
    result.read = $resource('/api/blogs/:id', {id: '@id'}, {
              'get': { method: 'GET', params: { id: '@id' }}
            });
    return result;
  }])
.service("blogservice", function($http){

		this.readbloginfo = function(id){
			var promise = $http.get('/api/blog/'+ id)
			.success(function(tem){
				console.log(tem);
				return tem;
			});
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

			var modalInstance = $modal.open({
				templateUrl: 'readblog.html',
				controller: ReadblogCtrl,
				size:'lg',
				resolve:{
					readblog: function(){return $scope.blogs[getid];}
					}
		});


		$scope.ok = function(){
				$location.url('/home');};
				
		
	};

	var ReadblogCtrl = function($scope, $location, $modalInstance, readblog){

				$scope.readtitle = readblog.title;
				$scope.readcontent = readblog.content;
				
				$scope.ok = function(){
				$location.url('/home');}
		};

/***********************Edit Blog******************************/
		$scope.editmode = false;
		
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
	