'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Blog = mongoose.model('Blog');


// Add Pengyin Shan as default user and Add default blog
User.find({}).update(function() {
  User.create({
    provider: 'local',
    name: 'Pengyin Shan',
    email: 'shanpy901115@gmail.com',
    password: 'shanpy'
  }, function() {
      console.log('finished populating users');
    }
  );
});

Blog.find({}).update(function(){
  Blog.create({
    title: "Welcome to Pengyin's Website",
    content: "I'll post blogs about problems/experiences I get in the process of building this website. Blogs will involved in Node.js/ExpressJS, AngularJS, Yeoman and D3.js.",
    date: "5/1/2014"
  }, function(){
    console.log('finished populating default blogs');
  });
});
