var express = require('express');

var app = express();

var DbConnector = require('./db/db.js')
dbConnector = new DbConnector()

// app.listen(8000, function(){
//   console.log('API server is running')
// })

// app.get()
