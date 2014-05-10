'use strict';

var mongoose = require('mongoose'),
  User = mongoose.model('User');


// Add Pengyin Shan as default user
User.find({}).remove(function() {
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
