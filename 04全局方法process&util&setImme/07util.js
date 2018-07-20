/*
* util
* 
*
* */
var util = require('util')
function Parent() {
    this.name = 'father';
    this.age = 60;
    this.say = function () {
        console.log('hellow',this.name);
    }
}
Parent.prototype.showName =  function () {
    console.log(this.name);
};
function Child() {
    this.name = 'Child';
}
//不能传参 会继承私有属性
// Child.prototype = new Parent(); //Parent.prototype

/*//子元素继承父元素
Child.prototype  = Object.create(Parent.prototype);*/
//继承
util.inherits(Child,Parent);


var child = new Child();
child.showName();

//Object Parent Child
console.log(child.__proto__.__proto__.__proto__ ===Object.prototype);

function Person() {
    this.name = 'cx';
    this.parent = {
        name:'parent'
    }
}
Person.prototype.toString = function () {
    console.log('this is',this.name)
}
var p = new Person();
p.toString()
/*
*  showHidden 是否显示隐藏属性
*  depth 对象的递归显示深度 第一级 第二级 第三级.....
*  colors 是否显示颜色
*
*
* */
console.log(util.inspect(p,true,4,true));
console.log(util.inspect(p,true,0,true));

// 数组拼接
var arr1 = [1,2];
var arr2 = [3,4];
console.log(arr1.concat(arr2));
Array.prototype.push.apply(arr1,arr2);
// arr1.push(3);
// arr1.push(4);
console.log(arr1);

//判断util
console.log(util.isArray([]));
console.log(util.isXXXXX([]));
