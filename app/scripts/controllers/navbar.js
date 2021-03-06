'use strict';
angular.module('webappApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }, {
      'title': 'Settings',
      'link': '/settings'
    }];
    
    $scope.logout = function() {
      Auth.logout()
      .then(function() {
        $location.path('/blogs');
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.gotointroduction = function() {
      console.log("gotointroduction");
      $location.path('/#introductioncontainer');
    };

    $scope.gotocheckblog = function() {
      $location.path('/#checkblogcontainer');
    };

    $scope.gotocontactme = function() {
      $location.path('/#contactmecontainer');
    };
  });
