var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    start:0,end:5,highWaterMark:3
});
var buffers = [];
rs.on('readable',function () {
    console.log('===readable===');
    // console.log(rs.read(1))/*参数1,2,3....代表 读几个字节*/
    //但缓存区灌满会再执行一次
    var buff;
    while (null !=(buff=rs.read(1))){
        buffers.push(buff);
    }/*obj.read()方法相当于消费缓存里的数据 如果不去消费 就会被阻塞*/
});
rs.on('end',function () {
    var data = Buffer.concat(buffers);
    console.log(data.toString())
});