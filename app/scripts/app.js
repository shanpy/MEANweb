'use strict';

console.log("app.js is called");

angular.module('webappApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'ui.sortable',
  'ui.bootstrap',
  "textAngular"
])
  .config(function ($routeProvider, $locationProvider, $httpProvider) {


    $routeProvider
      .when('/', {
        templateUrl: 'partials/home',
        controller: 'IndexblogCtrl'
      })
      .when('/login', {
        templateUrl: 'partials/login',
        controller: 'LoginCtrl'
      })
      .when('/signup', {
        templateUrl: 'partials/signup',
        controller: 'SignupCtrl'
      })
      .when('/settings', {
        templateUrl: 'partials/settings',
        controller: 'SettingsCtrl',
        authenticate: true
      })
      //Blog Part
      .when('/addblog', {
        templateUrl: 'partials/addblog',
        controller: 'AddblogCtrl',
        authenticate: true
      })
      .when('/readblog', {
        templateUrl: 'partials/readblog',
        controller: 'BlogblogCtrl'
      })
      //Send Email
      .when('/sendemail',{
        templateUrl:'partials/sendemail',
        controller:'SendemailCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
      
    $locationProvider.html5Mode(true);
      
    // Intercept 401s and redirect you to login
    $httpProvider.interceptors.push(['$q', '$location', function($q, $location) {
      return {
        'responseError': function(response) {
          if(response.status === 401) {
            $location.path('/login');
            return $q.reject(response);
          }
          else {
            return $q.reject(response);
          }
        }
      };
    }]);
  })
  .run(function ($rootScope, $location, Auth) {

    // Redirect to login if route requires auth and you're not logged in
    $rootScope.$on('$routeChangeStart', function (event, next) {
      
      if (next.authenticate && !Auth.isLoggedIn()) {
        $location.path('/login');
      }
    });
  });