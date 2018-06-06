var fs = require('fs');
/*同步方式把src 复制到target里*/

function copy(src,target) {
    var list = [];
    // 读取
    fs.open(src,'r',function (err,fd) {
        var pos = 0;
        function read() {
            var buffer = new Buffer(3);
            fs.read(fd,buffer,0,3,pos,function (err,bytesRead) {
                list.push(buffer);
                pos += bytesRead;
                if(bytesRead>0) read();
                else {
                    var result = Buffer.concat(list.slice(0,pos));
                    /*写入开始*/
                    fs.open(target,'w',function (err,fd) {
                        function write(){
                            fs.write(fd,result,0,pos,0,function (err,bytesWrite) {
                                fs.close(fd)
                            })
                        }
                        write()
                    })
                // 写入结束
                }
            })
        }
        read()
    })
}
copy('line.txt','2.txt');