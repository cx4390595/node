/*
*  fs.write 写入文件
*
* */
var fs = require('fs');
// fs.open('line.txt','w',function (err,fd) {
//     fs.write(fd,new Buffer('写入的内容'),9,6,0,function (err,bytesWrite) {
//         console.log(bytesWrite);
//     });
// });
var buffer = new Buffer("写入的内容");
fs.open('line.txt','w',function (err,fd) {
    console.log('first',fd);
    fs.write(fd,buffer,9,6,9,function (err,bytesWrite) {
        // console.log(bytesWrite);
        fs.write(fd,buffer,0,9,0,function (err,bytesWrite) {
            // console.log(bytesWrite)
            fs.close(fd)/*关闭*/
            fs.open('line.txt','w',function (err,fd) {
                console.log('second',fd)
            })
        })
    });
});
