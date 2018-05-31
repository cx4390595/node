//cwd current working directory  当前工作目录
console.log(process.cwd()); //可以修改
console.log(__dirname);
//change directory 改变当前目录
process.chdir('..') /*改变为上级目录*/
process.chdir(__dirname) /*改回当前目录*/
console.log(process.cwd()); //可以修改
console.log(__dirname);