'use strict';
var mongoose = require('mongoose');
var postmark = require("postmark")();
var data = {
	'emails':[{
		"from":"",
		"to":"",
		"subject":"",
		"content":""	}];
};

exports.sendemail = function (req, res) {
	
	data.emails.push(req.body);
	postmark.send(req.body, function(error, success) {
        if(error) {
            console.error("Unable to send via postmark: " + error.message);
            return;
        }
        console.info("Sent to postmark for delivery");
    });
};