'use strict';
var mongoose = require('mongoose');
var postmark = require("postmark")('5909eb63-c83c-4534-a671-e97576411724');
var data = {
	'emails':[{
		"From":"",
		"To":"",
		"Subject":"",
		"Content":""	}]
};

exports.sendemail = function (req, res) {
	
	data.emails.push(req.body);
	console.log(req.body);
	postmark.send(req.body, function(error, success) {
        if(error) {
            console.error("Unable to send via postmark: " + error.message);
            return;
        }
        console.info("Sent to postmark for delivery");
    });
};