var fs = require('fs');
var rs = fs.createReadStream('./4.fbr');//64K
var ws = fs.createWriteStream('./5.fbr');//16K


rs.on('data',function (data) {
    var flag = ws.write(data);
    console.log(flag)
});
ws.on('drain',function () {
   console.log('drain')
});