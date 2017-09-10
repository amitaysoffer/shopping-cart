var express = require('express'); // gives the express var access to the express module
var app = express ();

// these lines make my server
app.listen(8000);
app.use(express.static('public'));
app.use(express.static(__dirname + '/node_modules'));