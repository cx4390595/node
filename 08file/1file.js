var fs = require('fs');
/*同步*/
var data = fs.readFileSync('index.txt','utf8');
console.log(data);
/*异步*/
fs.readFile('index.txt','utf8',function (err,data) {
    console.log(data);
});
/*异步*/
fs.readFile('index.txt','utf8',function (err,data) {
    console.log(data);
});