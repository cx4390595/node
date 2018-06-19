var net = require('net');
var util = require('util');

var server = net.createServer({allowHalfOpen:true},function (socket) {
    console.log(util.inspect(socket.address()));
    socket.setEncoding('utf8');//可读流的方法
    socket.on('data',function (data) {
        console.log(data);
        console.log('已经接收到%d' ,socket.bytesRead)
        socket.write("服务器收到："+data);
    });
    socket.on('close',function (err) {
        console.log('close',err)
    });
    socket.on('end',function (end) {
        console.log('end',end)
    });
});

server.on('error',function (err) {
    console.log(err)
});

server.listen(7777,'0.0.0.0',511,function () {
    /*监听端口号,监听ip地址 最大队列数量 回调*/
   console.log(util.inspect(server.address()));
});
