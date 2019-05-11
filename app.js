/**
 * http://usejsdoc.org/
 */

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var session = require('express-session');
var lineReader = require('line-reader');
var index = require('./app_server/routes/index');
var app = express();
var fs = require('fs');
var mongoose = require("mongoose");
var nodemailer = require("nodemailer");
mongoose.Promise = global.Promise;

//View engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, 'public')));
app.use(session( {secret: "String for encrypting cookies." } ));
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("subscribedb");
  dbo.collection("users").drop(function(err, delOK) {
    if (err) throw err;
    if (delOK) console.log("Collection deleted");
    db.close();
  });
});






app.use('/', index);

module.exports = app;
app.listen(3000);