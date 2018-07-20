process.on('uncaughtException',function (e) {/*全局捕获*/
    console.log('uncaughtException',e.message);
});


process.argv.forEach(function (val,index,array) {
    console.log(val,index,array)
});
// process.kill(8728);/*杀掉进程*/

process.on('exit',function () {
    console.log('推出前执行')
});

//node是单线程的  让发生错误时不终止的方法
try{
    console.log(a);
}catch (e) {
    console.log(e.message)
}

console.log(b)
