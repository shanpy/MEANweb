'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
  title:String,
  content:String,
  introduction:String,
  date:String
});

BlogSchema
  .virtual('blogInfo')
  .get(function() {
    return {
      'title': this.title,
      'content': this.content,
      'introduction': this.introduction,
      'date': this.date
    };
  });


/**
 * Pre-save hook
 */
BlogSchema
  .pre('save', function(next) {
    if (!this.isNew) return next();
  });

module.exports = mongoose.model('Blog', BlogSchema);
