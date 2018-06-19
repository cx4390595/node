/*
*
* */
var fs = require('fs');
var rs = fs.createReadStream('./read.txt',{
    start:0,end:5,highWaterMark:3
});
rs.setEncoding('utf8')//方法：自定义编码
rs.on('open',function () {
    console.log('打开文件')
});
rs.on('data',function (data) {

    // setTimeout(function () {
        console.log(data)
    // },5000)
    rs.pause();//方法：读取暂停
    setTimeout(function () {
        rs.resume();//方法：读取开始
    },3000);
});
rs.on('end',function () {
    console.log('读取完成')
});
rs.on('close',function () {
    console.log('文件关闭')
});