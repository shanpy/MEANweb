'use strict';

angular.module('webappApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
