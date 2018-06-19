var http = require('http');
var options = {
    hostname:'localhost',
    port:8070,
    headers:{
        'Content-Type':'application/json'
    },
    path:'/',
    method:'POST'
}
var request = http.request(options,function (response) {
    response.setEncoding('utf8');
    var result = '';
    response.on('data',function (data) {
        result += data
    });
    response.on('end',function (data) {
        console.log(result);
    });
});
request.write(JSON.stringify({name:'cxxx'}));
request.end();