var fs = require('fs');
var rs = fs.createReadStream('./request.txt');
/*解析头部*/
/*比toString（）好用 可以解决乱码问题*/
var StringDecoder = require('string_decoder').StringDecoder;
function parseHeader(callback) {
    var headers = '';
    rs.on('readable',onReadable);
    var decoder = new StringDecoder()
    function onReadable() {
        var chunk;
        while (null !=(chunk = rs.read())){
            var str = decoder.write(chunk);
            console.log(str)
            if(str.match(/\r\n\r\n/)){/*匹配连续两个空格 即为分割线*/
                var splits = str.split(/\r\n\r\n/);
                headers += splits.shift();
                rs.removeListener('readable',onReadable)
                var  remain = splits.join('/\r\n\r\n/')
                var buf = new Buffer(remain,'utf8');
                if(buf.length) rs.unshift(buf);
                callback(headers)
            }else {
                headers += str;
            }
        }
    }
}

parseHeader(function (headers) {
    console.log(headers);
    rs.on('data',function (data) {
        console.log(data.toString());
    })
});

