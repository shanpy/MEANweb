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


//GET
exports.shortversion = function (req, res){
	var blogs = [];
	data.blogs.forEach(function (post, i){
		blogs.push({
			id: i,
			title: post.title,
			content: post.content
		});
	});
	res.json({
		blogs: blogs
	});
};

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

//POST
exports.addBlog = function (req, res){
	var newblog = new Blog(req.body.title, req.body.content);
	newblog.save(function(err) {
    if (err) return res.json(400, err);
    
    res.json(req.body);
  });
	//data.blogs.push(req.body);
	
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
/*
exports.index = function(req,res){
	res.render('index',{title: 'Blogs'});
};

exports.list = function(req,res){
	Blog.find({}, 'Title', function(error, blog){
		res.json(blog);
	});
};

exports.show = function (req, res) {
  var blogId = req.params.id;

  Blog.findById(blogId, function (err, blog) {
    if(blog){
    	res.json(blog);
    }
    else{
    	res.json({error:true});
    }
  });
};

exports.create = function(req,res){
	var reqbody = new Blog(req.body);
	var	newtitle = reqbody.title;
	var	newcontent = reqbody.content;
	var	newcreatedate = reqbody.createdate;
    var blogObj={title:newtitle,content:newcontent,createdate: newcreatedate};
	var blog = new Blog(blogObj);
		blog.save(function(err,doc){
			if(err||!doc){
				throw 'Error';
			}
			else{
				res.json(doc);
			}
		});
};

*/