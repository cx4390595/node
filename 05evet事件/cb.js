function Person() {
    this.name = 'cx'
    return {name:'zf'}
}
/*
*  1.创建空对象
*  2.把空对象作为this 传入Person
*  3.返回这个对象
*  4.new代表调用函数
* */
var p = new Person;
console.log(p.name);
var P2 = Person.bind({});
var p2 = new P2;
console.log(p2.name)