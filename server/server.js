var express = require('express');

var app = express();

var DbConnector = require('./db.js')
dbConnector = new DbConnector()
// dbConnector.insert('tests', {"test_comment": "a test seved thing"})
dbConnector.insert('articles', {"author": "Will", "title": "Some fascinating creatures", "body": "Kittens like Koshka", "Comments": {}})
dbConnector.insert('articles', {"author": "May", "title": "Some fascinating creatures", "body": "Kittens like Koshka", "Comments": {}})

// app.listen(8000, function(){
//   console.log('API server is running')
// })

// app.get()
