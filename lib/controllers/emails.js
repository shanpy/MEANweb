'use strict';
var mongoose = require('mongoose');
//var postmark = require("postmark")('5909eb63-c83c-4534-a671-e97576411724');
var nodemailer = require('nodemailer');

console.log("here!");
var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "Gmail",
    auth: {
        user: "shanpy901115@gmail.com",
        pass: "Spy62710!"
    }
});

var data = {
	'emails':[{
		"from":"",
		"to":"",
		"subject":"",
		"text":""	}]
};

exports.sendemail = function (req, res) {
	var id = req.params.id;
	data.emails[id] = req.body;
	smtpTransport.sendMail(data.emails[id], function(error, response){
    if(error){
        console.log(error);
    }else{
        console.log("Message sent: " + response.message);
    }
});
};