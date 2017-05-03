var Test = require('./react/test.jsx')

var app = function() {
  console.log("JS working");
  var test = new Test();
  test.holler();
}

window.onload = app();
