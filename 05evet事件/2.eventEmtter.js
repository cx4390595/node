var EventEmitter = require('events');
var util = require('util');
function Bell(name) {
    this.name = name;
}
util.inherits(Bell,EventEmitter);
var jingleBell = new Bell('jingle');
jingleBell.on('ring',function () {
    console.log('收到礼物')
});
jingleBell.addListener('ring',function () {
   console.log('收到礼物2')
});
// jingleBell.once('drop',function () {
//     console.log('铃铛丢了')
// });
var drop = function(who){
    console.log(who,'铃铛丢了1')
};
jingleBell.once('drop',drop);
jingleBell.emit('ring');
// jingleBell.removeListener('drop',drop);/*移除监听*/
jingleBell.emit('drop','鹿');
jingleBell.emit('drop','老人');