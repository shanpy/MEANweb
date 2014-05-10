'use strict';

var mongoose = require('mongoose'),
	Blog = mongoose.model('Blog');

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
	var id=req.body.id;	
	Blog.find({'id':id}, function (err, blog) {
    if (err) return next(err);
    if (!blog) return res.send(404);
    res.json(blog);
  });
};
/*
exports.fullversion = function (req, res){
	var id=req.params.id;
	console.log("export.fullversion: " + data.blogs);
	
	if(data.blogs !== null){
	if(id >= 0 && id<data.blogs.length){
		res.json({
			blogs: data.blogs[id]
		});
	}
	else{
		res.json(false);
	}
	}
	else{
		res.json(false);
		console.log('no blog in data');
	}
};
*/
//PUT
exports.editBlog = function (req, res){
	var id = req.body.id;
	if(data.blogs !== null){
	if(id>=0 && id<data.blogs.length){
		data.blogs[id] = req.body;
		res.json(true);
	}
	else{
		res.json(false);
	}
	}
	else{
		res.json(false);
		console.log('no blog in data');
	}
};

//DELETE
exports.deleteBlog = function (req, res){
	var id = req.params.id;
	
	if(data.blogs !== null){
	if(id>0 && id<data.blogs.length){
		data.blogs.splice(id, 1);
		res.json(true);
	}
	else{
		res.json(false);
		console.log("error when runing deleteBlog");
	}
	}
	else{
		res.json(false);
		console.log('no blog in data');
	}
};