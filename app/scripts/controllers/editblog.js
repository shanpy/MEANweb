'use strict';

angular.module('webappApp')
	.controller('EditblogCtrl', function ($scope,$http,$location, $routeParams) {
        
        console.log("editblog.js: " + $routeParams.id);

        $scope.form = {};
        $http.get('/api/blog/' + $routeParams.id)
            .success(function(response) {
                    console.log(JSON.stringify(response));
                    $scope.form = response.blogs;
                });

        $scope.editblog = function(){
            $http.put('/api/blog/'+ $routeParams.id, $scope.form)
                .success(function(data){
                    $location.url('/home');
                });
        }; 

    /*
    $http.get('/blogs').success(function(data){
        $scope.blogs = data;
    });

    $scope.newblog = '{' + '"title":'+ '"' + $scope.blog.title + '"'+ ',' +
                            '"content":' + '"' + $scope.blog.content + '"' + '}';

    $scope.addBlog = function(){
        var blog = $scope.newblog;
        var insertblog = new Blog(blog);
        insertblog.$save(function(e,insert){
            if(!e.error){
                $location.path("blogs");
            }
            else{
                console.log("Error when creating blog: " + e.error);
            }
        });
    	$scope.blogs.push($scope.blog.title);
    	$scope.blog = '';
    };

    $scope.removeBlog = function(index){
        console.log($scope.blog);
    	$scope.blogs.splice(index,1);
    }; */

  });


