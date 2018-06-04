exports.loaded = function(){
    console.log(module.loaded);
}
console.log('b开始加载')

var a = require('./a');
a.loaded();
console.log("a.name",a.name)
console.log("module.parent",module.parent);