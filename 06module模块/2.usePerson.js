var person = require('./person');
// console.log(require)
console.log(require.cache);
delete require.cache[require.resolve('./person')];
var person = require('./person');
person.getName();
person.getName('nice')

/*
* 1 核心模块 httP fs 优先级最高
* 2.通过路径加载
* 3.其他的文件模块
* */