var http = require('http');
var fs = require('fs');
var mime = require('mime');/*mime获取文件后缀*/
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
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        fs.readFile('index.html', function (err, data) {/*读取文件内容并将内容写入响应体中*/
            response.write(data);
            response.end();
        });
    }else{
       static1(url,response)
    }

    function static1(url,response) {/*mime.lookup(url)获取文件类型*/
        response.setHeader('Content-Type',mime.getType(url)+';charset=utf-8');
        fs.readFile(url.slice(1),function (err,data) {
            response.write(data);
            response.end();
        });
    }
}

var server = http.createServer(serve);

server.listen(8000, "localhost");