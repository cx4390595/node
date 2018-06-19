var http = require('http');

var options = {
    hostname:'localhost',
    port:8070,
    headers:{
        'Content-Type':'application/x-www-form-urlencoded'
    },
    path:'/',
    method:'POST'
}
var request = http.request(options,function (response) {
    response.setEncoding('utf8');
    var result = '';
    response.on('data',function (data) {
        result += data
    })
    response.on('end',function (data) {
        console.log(result);
    })

});
var querystring = require('querystring');
request.write(querystring.stringify({"name":"cxxxxxx"}));
request.end();