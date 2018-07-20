var net = require('net');
var util = require('util');
var fs = require('fs')

var ws = fs.createWriteStream('./socket.txt')
var server = net.createServer({allowHalfOpen:false},function (socket) {
    console.log(util.inspect(socket.address()));
    socket.setEncoding('utf8');//可读流的方法

    /*客户端停止 写入时也不关闭目标文件*/
    socket.pipe(ws,{end:false});

    socket.on('end',function () {
        ws.end('再见');
        socket.unpipe(ws);
    });
});

server.on('error',function (err) {
    console.log(err)
});

server.listen(7777,'0.0.0.0',511,function () {
    /*监听端口号,监听ip地址 最大队列数量 回调*/
   console.log(util.inspect(server.address()));
});
