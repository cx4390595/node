
var Person = require('./Human');
var girl = new Person('小龙女',28);
var boy = new Person('杨过',15);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

girl.setName('老龙女');
girl.setAge(50);

console.log(girl.getName(),girl.getAge());
console.log(boy.getName(),boy.getAge());

console.log(girl.home,boy.home);
girl.home = '上海';
console.log(girl.home,boy.home);
console.log(Person.staticName)