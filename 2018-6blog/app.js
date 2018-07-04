var express = require('express');
var path = require('path');//处理路径
var favicon = require('serve-favicon');//处理收藏夹图标的
var logger = require('morgan');//处理日志
var cookieParser = require('cookie-parser');//处理cookie req.cookie req.cookies
var bodyParser = require('body-parser');//解析请求体的
var session = require('express-session');
var MongoStore = require('connect-mongo/es5')(session);
var flash = require('connect-flash');//显示信息
var settings = require('./settings');
var routes = require('./routes/index'); //根路由
var users = require('./routes/users');//用户路由
var articles = require('./routes/articles');//用户路由
var multer = require('multer');//上传文件

require('./util');//引入自定义工具（md5文件加密）
require('./db');//引入mongoose
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模板的存放路径
app.set('view engine', 'html');//设置模板引擎
app.engine('html',require('ejs').__express);//设置对html文件的渲染方式

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));//指定日志输出的格式
app.use(bodyParser.json());//处理JSON 通过 Content-Type来判断是否由自己来处理
app.use(bodyParser.urlencoded({ extended: false }));//处理form-urlencoded
app.use(cookieParser());//处理cookie 把请求头的cookie转成对象 加入一个cookie函数的属性

//再加载会话session中间件,它依赖cookie
app.use(session({
    resave:true,
    secret: 'cuixiao',
    saveUninitialized:true,
    store:new MongoStore({url:settings.dbURL})
}));

//再加载flash中间件，它依赖session
app.use(flash());
//模板变量处理中间件它依赖flash
app.use(function (req,res,next) {
   res.locals.user =  req.session.user ;/*！！！！！！！*/
    res.locals.keyword = req.session.keyword;
   res.locals.success =  req.flash('success').toString();/*！！！！！！！*/
   res.locals.error =  req.flash('error').toString();/*！！！！！！！*/
   next();


});

app.use(express.static(path.join(__dirname, 'public')));//静态文件服务

//路由中的模板渲染依赖flash中间件
app.use('/', routes);
app.use('/users', users);
app.use('/articles', articles);

// catch 404 and forward to error handler
//捕获404错误并且转发到错误处理中间件
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);//设置响应状态码
        res.render('error', { //渲染模板 模板文件 参数数据
            message: err.message,
            error: err
        });
    });
}

// production error handler 生成环境下的错误昝
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
