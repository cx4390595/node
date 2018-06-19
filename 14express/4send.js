/*
*
*
*
* */

var express = require('express');
var app = express();
app.get('/query',function (req,res) {
    res.send(req.query);
});
app.post('/article/:id/:name',function (req,res) {
    res.send(req.params);
    //{id:'xxx',name:'xxx'}
});
app.all('/host',function (req,res) {
    console.log(req.path);
    console.log(req.host);
    res.send('host')
});
app.listen(8888);
