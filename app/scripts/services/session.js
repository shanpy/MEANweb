'use strict';

angular.module('projectApp')
  .factory('Session', function ($resource) {
    return $resource('/api/session/');
  });
