var querystring = require('querystring');
var obj = querystring.parse('name=XXX&age=6');
console.log(obj)
var obj = querystring.parse('name@XXX;age@6',';','@',{maxKeys:2});
console.log(obj);

console.log(querystring.stringify(obj))