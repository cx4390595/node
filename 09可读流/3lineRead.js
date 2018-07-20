var fs = require('fs');
var rs = fs.createReadStream('./read.txt', {
    start: 0, end: 1, highWaterMark: 2
});
var buffers = [];
rs.on('readable', function () {
    console.log('===readable===');
    var buff;
    while (null != (buff = rs.read(1))) {
        var char = buff[0]/*判断是否是换行符 如果是就触发事件*/
    }
});
rs.on('end', function () {
    var data = Buffer.concat(buffers);
    console.log(data.toString())
});