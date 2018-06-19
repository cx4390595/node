/*
*  做一个计数器 传入一个最大值
*  然后每次能读到一个数,累加到最大值;
*
* */
var Readable = require('stream').Readable;
var util = require('util');
util.inherits(Counter, Readable);
/*子类的原型等于父类的构造函数new出来的一个实例*/
// Counter.prototype = Object.create(Readable.prototype)
// var counter = new Counter();
// console.log(counter.__proto__.__proto__);


function Counter(max, options) {
    Readable.call(this,options)/*要调用父类*/
    this._max = max;
    this._index = 0;
}

Counter.prototype._read = function () {
    if (this._index++< this._max) {
        this.push(new Buffer(String(this._index)))//往读取队列中写入数据并发射时间
    } else {
        this.push(null);//已经写入完毕
    }
}
var counter = new Counter(10);
counter.setEncoding('utf8');
counter.on('data', function (data) {
    console.log(data);
})
counter.on('end', function () {
    console.log('over')
})