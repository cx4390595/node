var fs = require('fs');
var rs = fs.createReadStream('read.txt');
var ws = fs.createWriteStream('write.txt');
rs.pipe(ws);

/*原理*/
rs.on('data',function (data) {
    var flag = ws.write(data);
    if(!flag){
        rs.pause();
    }
});
/*当drain(排空对象)触发的时候 回复读取事件*/
ws.on('drain',function () {
    rs.resume();
})