'use strict';

angular.module('webappApp')
  .factory('ReadblogFactory', ['$resource',function ($resource) {
    return $resource('/api/blogs/:id', {}, {
              read: { method: 'GET', params: { id: '@id' }}
            });
  });
