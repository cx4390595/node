// /*//1.
// var buf1 = new Buffer(3);//长度为3
// console.log(buf1);
// buf1.fill(1);
// console.log(buf1);
// buf1[0] = 0x61; //0x??16进制写法
// buf1[1] = 0x62;
// buf1[2] = 0x63;
// //2.
// var buf2 = new Buffer([0x61,0x62,0x63]);
// //3.
// var buf3 = new Buffer("abc","utf8");
//
// console.log(buf1.toString() == buf2.toString() );
// console.log(buf2.toString() == buf3.toString());
// console.log(buf1.toString() == buf3.toString());
//
//
// var buf4 = new Buffer("中","utf8");
// console.log(buf4);
// var buf5 = new Buffer("a","ascii");
// console.log(buf5);*/

var str = "珠峰培训";
var buf = new Buffer(str,'utf8');
// console.log(str.length);
// console.log(buf6.length);
// console.log(buf6.toString('utf8'));

str[0] = '天';
// console.log(buf6);
// console.log(str);
buf[0] = 0;
console.log(buf);

var newStr = str.slice(1);
var newBuff = buf.slice(1);
newBuff[1] = 0xff;
console.log(newBuff)
console.log(buf)

//写字节
buf.write("珠峰",0,6);
buf.write("培训",6,6);
console.log(buf.toString());

var buffer = new Buffer("珠峰培训");
var buf1 = buffer.slice(0,7);//7个 //0开始取 取7个
var buf2 = buffer.slice(7);//5个
console.log(buf1.toString());
console.log(buf2.toString());

/*解决乱码问题*/
var StringDecoder = require('string_decoder').StringDecoder;
var decoder = new StringDecoder();
console.log(decoder.write(buf1));
console.log(decoder.write(buf2));

//复制Buffer
var srcBuf = new Buffer([4,5,6]);
var tarBuf = new Buffer(6);
tarBuf[0] = 1;
tarBuf[1] = 2;
tarBuf[2] = 3;
srcBuf.copy(tarBuf,3,1,2);
console.log(srcBuf);
console.log(tarBuf);

//buf.concat 连接两个buffer
var buf1 = new Buffer([1,2,3]);
var buf2 = new Buffer([4,5,6]);
var buf = Buffer.concat([buf1,buf2],6);
console.log(buf);