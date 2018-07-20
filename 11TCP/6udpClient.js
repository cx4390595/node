var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

socket.on('message',function (msg,rinfo) {
    console.log(msg.toString());
    console.log(rinfo);
});
socket.send(new Buffer('今天感冒了'),0,12,41234,'localhost',function (err,bytes) {
    console.log('发送了%d个字节',bytes)
});