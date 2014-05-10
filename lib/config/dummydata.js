'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Blog = mongoose.model('Blog');


// Add Pengyin Shan as default user
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
