var fs = require('fs');
var rs = fs.createReadStream('./1.txt');
var ws = fs.createWriteStream('./2.txt');
ws.on('open',function () {
    console.log('写入文件已经打开')
});
rs.on('data',function (data) {
    ws.write(data);
});
rs.on('end',function () {
   ws.end('写入完成',function () {
       console.log('over');
       console.log('共写入%d字节',ws.bytesWritten)
       /*ws.bytesWritten写入的字节数*/
   });
});
/*
ws.on('close',function () {
    console.log('文件关闭')
});*/
