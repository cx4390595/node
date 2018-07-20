var Writable = require('stream').Writable;
var util = require('util');
util.inherits(ConsoleStream, Writable);

function ConsoleStream(path) {
    this.path =path;
    Writable.call(this);
}

ConsoleStream.prototype._write = function (data, encoding, callback) {
  console.log(data.toString());
  callback();
};
var cx = new ConsoleStream('./text.txt');
cx.write(new Buffer('崔骁'),function () {
    console.log('输入完毕');
    cx.write(new Buffer('培训'),function () {
        console.log('培训输入完毕');
    });
});