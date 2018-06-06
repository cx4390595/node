/*
* readFileSync
* */
var fs = require('fs');
/*
   flag:
* O_RDONLY 只读
* O_SYNC 同步
* O_RDWR 可读可写
* O_TRUNC truncate 清空文件
* O_CREAT 如果原来没有就创建
* O_WRONLY 只写
* O_EXCL exclusive 排它操作
* O_APPEND 追加
*
* * */
/*
* path 路径
* options
* encoding;文件编码
* flag
* */
var data  = fs.readFileSync('index.txt',{encoding:'utf8',flag:'r'});
var data  = fs.readFile('index1.txt',{encoding:'utf8',flag:'w'},function (err,data) {
    if(err){
        console.error(err)
    }
});