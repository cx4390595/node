var http = require('http');
/*
*
*  @param request 请求
*  @param response 响应
*
* */
function serve(request,response){/*每当有请求来的时候调用server函数*/
    console.log(request.method);/*请求的方法*/
    console.log(request.url);/*请求里的url*/
    console.log(request.headers);/*获取请求头*/
    response.statusCode = 404;/*响应状态码*/
    response.setHeader('Content-Type','text/html;charset=utf-8')
    response.setHeader('name','cx');/*设置响应头*/
    response.write(new Date().toString());
    response.end()
}
var server = http.createServer(serve);

server.listen(8080,"localhost");