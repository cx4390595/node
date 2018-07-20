var Transform = require('stream').Transform;
var fs = require('fs');
var util = require('util');
util.inherits(TransferStream,Transform);
function TransferStream() {
    Transform.call(this);
}
TransferStream.prototype._transform = function (data,encoding,callback) {
    for(var i=0;i<data.length;i++){
        data[i] = 255-data[i];
    }
    this.push(data);
    this.push(null);
};
var transfer = new TransferStream()
fs.createReadStream('./password-secret.txt').pipe(transfer).pipe(
    fs.createWriteStream('./password-secret-secret.txt')
)