Function.prototype.myCall = function (context) {
    // 如果是null或者undefined,则context赋值window
    context = context || window;
    if(typeof context !== 'object') {
        return context;
    }
    // 把当前this（即调用myCall的对象）赋值给context.fn
    context.fn = this;
    // 获取第一位参数后的参数
    var args = [...arguments].slice(1);
    // 执行当前函数，并得到结果
    var result = context.fn(...args);
    // 删除这个context上的fn属性
    delete context.fn;
    // 返回得到的结果
    return result;
}