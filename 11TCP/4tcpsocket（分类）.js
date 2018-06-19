var net = require('net');
var util = require('util');
var fs = require('fs');

var ws = fs.createWriteStream('./socket.txt');
var server = net.createServer({allowHalfOpen:true},function (socket) {
    socket.setTimeout(10*1000);
    socket.on('timeout',function () {
        socket.resume();
        socket.pipe(ws,{end:false});
        ws.write(socket.remoteAddress)

    });
});

server.on('error',function (err) {
    console.log(err)
});

server.listen(7777,function () {
    /*监听端口号,监听ip地址 最大队列数量 回调*/
   console.log(util.inspect(server.address()));
});
