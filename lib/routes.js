'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    users = require('./controllers/users'),
    blogs = require('./controllers/blogs'),
    session = require('./controllers/session'),
    middleware = require('./middleware'),
    emails = require('./controllers/emails');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  
  app.route('/api/users')
    .post(users.create)
    .put(users.changePassword);
  app.route('/api/users/me')
    .get(users.me);
  app.route('/api/users/:id')
    .get(users.show);

    //Blog Part
  app.route('/api/blogs')
    .get(blogs.shortversion);
  app.route('/api/blog')
    .get(blogs.fullversion);
  app.route('/api/blog')
    .post(blogs.addBlog);
  app.route('/api/blog')
    .put(blogs.editBlog);
  app.route('/api/blog') 
    .delete(blogs.deleteBlog);

  //postmark
  app.route('/api/sendemail')
    .post(emails.sendemail);

  app.route('/api/session')
    .post(session.login)
    .delete(session.logout);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( middleware.setUserCookie, index.index);
};