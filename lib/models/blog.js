'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    crypto = require('crypto'),
    autoIncrement = require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://shanpy:Spy62710!@ds033087.mongolab.com:33087/mean");

autoIncrement.initialize(connection);

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd='0'+dd;
} 

if(mm<10) {
    mm='0'+mm;
} 

today = mm+'/'+dd+'/'+yyyy;

/**
 * Blog Schema
 */
var BlogSchema = new Schema({
  id:{
    type:Number,
    unique:true
  },
  title:{
    type:String,
    unique:true
  },
  content:String,
  introduction:String,
  date:{ type: String, default: today }
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
