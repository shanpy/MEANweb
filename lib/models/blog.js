'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
  tilte:String,
  content:String
});

module.exports = mongoose.model('Blog', BlogSchema);
