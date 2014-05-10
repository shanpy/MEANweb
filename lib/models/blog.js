'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto');

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
  title:{
    type:String,
    unique:true
  },
  content:String,
  introduction:String,
  date:{ type: Date, default: Date.now }
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
    next();
  });

module.exports = mongoose.model('Blog', BlogSchema);
