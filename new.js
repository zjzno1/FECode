function newFn (constructor, ...args) {
  let tmpObj = Object.create({});
  tmpObj.__proto__ = constructor.prototype;
  let res = tmpObj.call(this, ...args);
  return Object.prototype.toString.call(res) === '[Object object]' ? res : tmpObj;
}

/**
 * 创建一个新的空的对象
 * 把这个对象链接到原型对象上
 * 这个对象被绑定为this
 * 如果这个函数不返回任何东西，那么就会默认return this
 */

// 绑定优先级

/**
 * 箭头函数
 * 关键字new调
 * 显式绑定
 * 隐式绑定
 * 默认绑定
 */

 function foo() { 
  this.baz = "baz"; 
  console.log(this.bar + " " + bar); 
} 
var baz = new foo(); 
var bar = "bar"; 