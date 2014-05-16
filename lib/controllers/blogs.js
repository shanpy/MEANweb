'use strict';

var mongoose = require('mongoose'),
	Blog = mongoose.model('Blog');
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

//POST
exports.addBlog = function (req, res){
	var newblog = new Blog(req.body);
	newblog.save(function(err) {
    if (err) return res.json(400, err);
    
    res.json(req.body);
  });
	//data.blogs.push(req.body);
	
};

//GETd
exports.shortversion = function (req, res){
  Blog.find({}, function (err, blog) {
    if (err) return next(err);
    if (!blog) return res.send(404);

    res.json(blog);
  });
};	

exports.fullversion = function (req, res, next){
	var id=req.params.id;
	Blog.find({'id':id}, function (err, blog) {
    if (err) return next(err);
    if (!blog) return res.send(404);
    res.json(blog);
  });
};
//PUT
exports.editBlog = function (req, res){
	var id=req.params.id;
	var updateData = {
		title: req.body.title,
		content: req.body.content,
		id: req.body.id,
		introduction: req.body.introduction,
		date: today
	};
	Blog.update({'id':id},updateData,function(err, affected){
		if (err) return handleError(err);
		res.json(true);
	});
};

//DELETE
exports.deleteBlog = function (req, res){
	var id=req.params.id;
	
	Blog.find({'id':id}).remove(function(err, blog){
    if (err) return handleError(err);
    if (!blog) return res.send(404);
    res.json(true);
	});
};