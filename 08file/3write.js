var fs = require('fs');
/*
* 异步的方式写入字符串
* read r write w execute
*  可读    可写    可执行
*  二爷（写）一直（执行）死（读）读书
*  4         2      1
* -rw- 创建者拥有的权限
* r-- 所属组
* r-- 其他
* */
fs.writeFile('line.txt','第一行',{flag:"w",encoding:'utf8'},function (err) {
    console.log(err)
});
fs.writeFile('line.txt',new Buffer('第二行'),{flag:"a",encoding:'utf8'},function (err) {
    console.log(err)
});
/*node自带追加*/
fs.appendFile('line.txt',new Buffer('第三行'),function (err) {
    console.log(err)
});
/*
* base64
* base 是把3个8位字节 转成4个6位直接 然后在6位字节前补两个0
* */

var buf = new Buffer('珠');
console.log(buf);
/*先把16进制转换成10进制*/
console.log(parseInt("e7",16));
console.log(parseInt("8f",16));
console.log(parseInt("a0",16));
/*10进制转换成2进制*/
console.log((231).toString(2));
console.log((143).toString(2));
console.log((160).toString(2));

/*
    每6位在前面填2个0
* 00111001 00111000 00111110 00100000
* */

/*再把2进制转换成10进制*/
console.log(parseInt("00111001",2));
console.log(parseInt("00111000",2));
console.log(parseInt("00111110",2));
console.log(parseInt("00100000",2));

/*base64取值范围*/
var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
str += str.toLocaleLowerCase();
str += "0123456789";
str += '+/';

/*取值方式*/
console.log(str[57]+str[56]+str[62]+str[32]);