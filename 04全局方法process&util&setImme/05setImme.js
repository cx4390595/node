var fs = require('fs');
fs.readFile('1.txt',function (err,data) {
    console.log(data.toString())
});
// process.nextTick(function () {
//     console.log('a')
//     process.nextTick(function () {
//         console.log('b')
//     })
// })
setTimeout(function () {
    console.log('a扫地setTime')/*优先级比setImmediate高*/
},0);

setImmediate(function () {
    console.log('a');
    setImmediate(function () {
        console.log('b');
    })
});
//优先级：nextTick>setTimeout>setImmediate>异步IO readFile