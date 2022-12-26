function newFn (constructor, ...args) {
  let tmpObj = Object.create({});
  tmpObj.__proto__ = constructor.prototype;
  let res = tmpObj.call(this, ...args);
  return Object.prototype.toString.call(res) === '[Object object]' ? res : tmpObj;
}