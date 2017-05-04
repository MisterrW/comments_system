var express = require('express');
var path = require('path');

var app = express();

app.use(express.static( path.join( __dirname + '/client/build/' )));

app.get("/", function(request, response){
  console.log("you made it this far")
  response.sendFile(path.join(__dirname + '/client/build/index.html'))
})

var server = app.listen(3000, function(){
  console.log('app running!');
})
