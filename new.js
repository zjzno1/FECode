/**
 * 创建一个新的空的对象
 * 把这个对象链接到原型对象上
 * 这个对象被绑定为this
 * 如果这个函数不返回任何东西，那么就会默认return this
 */

// 绑定优先级

function myNew (constructor) {
  let obj = Object.create({});
  obj.__proto__ = constructor.prototype;
  let res = constructor.apply(obj, Array.from(arguments).slice(1));
  return Object.prototype.toString.call(res) === '[Object object]' ? res : obj;
}

function Person(name, age, job) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function() {
     console.log(this.name)
  }
}

var person = myNew(Person,'Nicholas', 29, 'Front-end developer'); 
var person2 = new Person('Nicholas', 29, 'Front-end developer'); 
console.log('person', person, person2);
/**
 * 箭头函数
 * 关键字new调
 * 显式绑定
 * 隐式绑定
 * 默认绑定
 */

//  function foo() { 
//   this.baz = "baz"; 
//   console.log(this.bar + " " + bar); 
// } 
// var baz = new foo(); 
// var bar = "bar"; 