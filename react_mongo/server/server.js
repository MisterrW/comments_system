var express = require('express');
var routes = require('./routes')

var DbConnector = require('./db/db.js')
dbConnector = new DbConnector()

var app = express();
app.use('/', routes);

app.listen(8000, function(){
  console.log('API server is running')
})
