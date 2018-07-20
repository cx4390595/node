/*
*       process.stdout.write();标准输出 0
      process.stdin; 标准输入 1
      process.stderr; 错误输出 2
* */
var fs = require('fs');
// fs.write(2,'珠峰培训',function (err) {
//
// });
setTimeout(function () {
    var buffer = new Buffer(1);
    fs.read(0,buffer,0,1,0,function (err) {
        console.log(buffer.toString());
    });
},3000);

// process.stdin.on('data',function (err,data) {
//     console.log(arguments);
// });
setInterval(function () {

},1000)