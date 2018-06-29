var createError = require('http-errors');
var express = require('express');
var path = require('path');//处理路径
var cookieParser = require('cookie-parser');//处理cookie req.cookie方法（往里面写cookie） req.cookies属性
var logger = require('morgan');//处理日志

var indexRouter = require('./routes/index'); //根路由
var usersRouter = require('./routes/users');//用户路由
var articlesRouter = require('./routes/articles');//用户路由

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));//设置模板的存放路径
app.set('view engine', 'html');
app.engine('html',require('ejs').__express);

app.use(logger('dev'));//指定日志输出的格式
app.use(express.json());//处理JSON 通过Content-Type来判断是否来处理
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());//处理cookie 把请求头的cookie转成对象 加入一个cookie函数的属性
app.use(express.static(path.join(__dirname, 'public')));//静态文件服务

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/articles', articlesRouter);

// catch 404 and forward to error handler
//捕获404错误并且转发到错误处理中间件
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500); //设置响应状态码
  res.render('error');
});

module.exports = app;
