var http = require('http');
var fs = require('fs');
/*
*
*  @param request 请求
*  @param response 响应
*
* */
function serve(request, response) {/*每当有请求来的时候调用server函数*/
    var url = request.url;
    if (url == '/') {
        // response.statusCode = 200;/*响应状态码 默认200*/
        response.setHeader('Content-Type', 'text/html;charset=utf-8')
        response.setHeader('name', 'cx');
        fs.readFile('index.html', function (err, data) {/*读取文件内容并将内容写入响应体中*/
            response.write(data);
            response.end()
        });
    } else if (url == '/style.css') {
        response.setHeader('Content-Type', 'text/css;charset=utf-8');
        fs.readFile('style.css', function (err, data) {/*读取文件内容并将内容写入响应体中*/
            response.write(data);
            response.end();
        })
    }else if(url =='/index.js'){
        response.setHeader('Content-Type','application/x-javascript;charset=utf-8');
        fs.readFile('index.js',function (err,data) {
            response.write(data);
            response.end();
        })
    }
}
var server = http.createServer(serve);

server.listen(8080, "localhost");