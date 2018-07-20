/*
*  npm install ejs
* */
var express = require('express');
var fs = require('fs')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(express.static(path.join(__dirname,'public'),{
    dotfiles:'deny',
    index:'inx.html',//如果没找到 再找inx.html文件
    setHeaders:function (response) {
        response.setHeader('name','cx');
    }
    }
));
app.use(function (req,res,next) {
    console.log(req.headers['content-type']);
    next();
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));//form表单 是否继承默认
app.post('/post',function (req,res) {
    res.send(req.body);
})

app.set('view engine','html');/*模板引擎*/
app.set('views',__dirname);/*当前文件夹*/
app.engine('html',require('ejs').__express);/*设置模板引擎*/
app.get('/index',function (req,res) {
    res.render('index',{
        name:'cx',
        age:20
    })

});
app.listen(8888);