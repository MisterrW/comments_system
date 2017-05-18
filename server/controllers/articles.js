var DbConnector = require('../db/db.js');

var Articles = function(){
  this.dbConnector = new DbConnector();
  console.log('constructor working');
};

module.exports = Articles;
