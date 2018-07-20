/*以每3个字节读取文件*/
var fs = require('fs');
var list = [];
fs.open('line.txt', 'r', function (err,fd) {
    var pos = 0;
    function read() {
        var buffer = new Buffer(3);
        fs.read(fd,buffer, 0, 3, pos, function (err,bytesRead) {
            list.push(buffer);
            pos += bytesRead;
            console.log(bytesRead)
            if (bytesRead > 0)
                read();
            else {
                var result = Buffer.concat(list);
                console.log(result.slice(0, pos).toString());
            }
        });
    }
    read();
});
console.log('dddd');