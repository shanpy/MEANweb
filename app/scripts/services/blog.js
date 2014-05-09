'use strict';

angular.module('webappApp')
  .factory('Blog', function ($resource) {
    return $resource('/api/blogs/:blogId', {}, {
              query: { method: 'GET', params: { blogId: 'blog' }, isArray: true }
            });
  });
