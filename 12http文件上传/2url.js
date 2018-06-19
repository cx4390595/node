var url = require('url');
var urlObj = url.parse('http://zfpx:123@www.baidu.com:80/mypath/sub?name=zfpx#top');
console.log(urlObj);
//转换成字符串
console.log(url.format(urlObj))