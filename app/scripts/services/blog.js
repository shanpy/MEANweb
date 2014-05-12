'use strict';

angular.module('webappApp')
  .factory('ReadBlogFactory', function ($http) {
    return $resource('/api/blogs/:id', {}, {
              query: { method: 'GET', params: { blogId: 'blog' }, isArray: true }
            });
  });
