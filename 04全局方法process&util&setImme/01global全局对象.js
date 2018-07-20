process.on('uncaughtException',function (e) {/*全局捕获 未捕获异常 不推荐使用*/
    console.log('uncaughtException',e.message);
});
/*
*  global= window 全局对象
*  module 当前模块对象
*  exports 导出对象
*  require 加载模块的方法
*  __dirname 当前模块所在目录的绝对路径
*  __filename 当前模块的绝对路径
* */
// function x(module,exports,require,__dirname,__filename){
    var name = 'cx'
    exports.name = name ;
    console.log(this.name)
    console.trace();//显示当前调用的堆栈
// }
    console.log(global);

    /*
    *  setImmediate clearImmediate
    *  pid 4856 进程ID
    *  process 当前的进程对象
    *
    *
    * */
    /* 当console.log(a)有值 会有以下几种情况
    *  1.当前模块内部声明的变量
    *  2.外部导入的模块
    *  3.全局对象
    *  4.从外界传入的参数
    * */
    // console.log(a)
// 相当于console.log();
process.stdout.write('hello');
console.log(process.pid)/*当前进程id*/
process.stdin.on('data',function (data) {
    console.log(data.toString())
});

process.argv.forEach(function (val,index,array) {
    console.log(val,index,array)
});

process.on('exit',function () {
    console.log('推出前执行')
});
//node是单线程的  让发生错误时不终止的方法
try{
    console.log(a);
    var conn = 'mysql';
}catch (e) {
    console.log(e.message)
}

console.log(b)