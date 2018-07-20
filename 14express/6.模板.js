/*
*  npm install ejs
* */
var express = require('express');
var app = express();
app.set('view engine','html');/*模板引擎*/
app.set('views',__dirname);/*当前文件夹*/
app.engine('html',require('ejs').__express);/*设置模板引擎*/
app.get('/',function (req,res) {
    res.render('index',{
        name:'cx',
        age:20
    })

});
app.listen(8888);