"use strict";

var express = require( 'express' ) ;
var nunjucks = require( 'nunjucks' ) ;
var app = express() ;
var path    = require("path");



app.use(express.static(__dirname +'/public'));

app.use(express.static(__dirname +'/public/app/js'));

app.get('',function(req,res){
  res.sendFile(path.join(__dirname+'/public/app/index.html'));
});

app.listen(3000);

console.log("Running at Port 3000");
