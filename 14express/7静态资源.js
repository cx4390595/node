/*
*  npm install ejs
* */
var express = require('express');
var fs = require('fs')
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname,'public'),{
    dotfiles:'deny',
    index:'inx.html',//如果没找到 再找inx.html文件
    setHeaders:function (response) {
        response.setHeader('name','cx')
        console.log(arguments);
    }
    }
));


// app.use(function (req,res,next) {
//     var rs =fs.createReadStream(path.join(__dirname,'public',req.path));
//         rs.on('error',function () {
//            next();
//         });
//         rs.pipe(res);
// })


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