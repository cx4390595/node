var net = require('net');
var util = require('util');
//net.Socket 双攻流 Duplux
var server = net.createServer({allowHalfOpen:false},function (socket) {
    console.log(util.inspect(socket.address()));
    /*查看当前的链接数量*/
    server.getConnections(function (err,count) {
        console.log(count)
    })
    socket.on('error',function (err) {
        console.log(err);
        socket.distroy();
    })
});
server.on('error',function (err) {
    console.log(err)
});
server.listen(7777,'0.0.0.0',511,function () {
    /*监听端口号,监听ip地址 最大队列数量 回调*/
   console.log(util.inspect(server.address()));
   setTimeout(function () {
       server.close()
   },3000)
});
server.on('close',function () {
    console.log('服务器端正常关闭')
})