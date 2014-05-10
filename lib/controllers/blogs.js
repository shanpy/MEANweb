'use strict';

var mongoose = require('mongoose'),
	Blog = mongoose.model('Blog');

/*
var data = {
	"blogs":[
		{
			"id":"",
			"title": "Welcome to Pengyin's Website",
			"content": "I'll post blogs about problems/experiences I get in the process of building this website. Blogs will involved in Node.js/ExpressJS, AngularJS, Yeoman and D3.js."
		}
	]}; 
*/

//POST
exports.addBlog = function (req, res){
	var newblog = new Blog(req.body);
	newblog.save(function(err) {
    if (err) return res.json(400, err);
    
    res.json(req.blogInfo);
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
	/*var blogs = [];
	data.blogs.forEach(function (post, i){
		blogs.push({
			id: i,
			title: post.title,
			content: post.content
		});
	});
	res.json({
		'blogs',
	});
};*/

exports.fullversion = function (req, res){
	var id=req.params.id;
	
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


//PUT
exports.editBlog = function (req, res){
	var id = req.params.id;
	console.log("export.editBlog: " + data.blogs);
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