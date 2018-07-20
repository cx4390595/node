var http = require('http');
var fs = require('fs');
var mime = require('mime');/*mime获取文件后缀*/
var url = require('url');/*对URL进行处理 把字符串转成对象*/
/*
*
*  @param request 请求
*  @param response 响应
*
* */
function serve(request, response) {/*每当有请求来的时候调用server函数*/
    var urlObj = url.parse(request.url, true);
    console.log(request.url, urlObj.query.name, urlObj.query.age);//查询字符串
    var pathname = urlObj.pathname;
    if (pathname == '/') {
        // response.statusCode = 200;/*响应状态码 默认200*/
        response.setHeader('Content-Type', 'text/html;charset=utf-8');
        fs.readFile('index.html', function (err, data) {/*读取文件内容并将内容写入响应体中*/
            response.write(data);
            response.end();
        });
    } else if(pathname == '/clock'){
        var counter = 0;
       var int = setInterval(function () {
            response.write(new Date().toString());
            counter++
            if(counter == 5){
                clearInterval(int)
                response.end();
            }
        },1000);
}else{
       static1(pathname,response)
    }

    function static1(pathanme,response) {/*mime.lookup(url)获取文件类型*/
        response.setHeader('Content-Type',mime.getType(pathanme)+';charset=utf-8');
        fs.readFile(pathanme.slice(1),function (err,data) {
            response.write(data);
            response.end();
        });
    }
}

var server = http.createServer(serve);

server.listen(8080, "localhost");