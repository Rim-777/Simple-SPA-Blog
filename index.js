require('babel-register');

var result = require('./render').default;

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send(result);
});

app.listen(3008);

