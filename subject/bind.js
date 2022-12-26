Function.prototype.myBind = function (context) {
    if (typeof context !== 'function') {
        return TypeError('Error');
    }
    var _this = this;
    var args = [...arguments].slice(1);

    return function F() {
        if (this instanceof F) {
            return new _this(...args, ...arguments);
        } else {
            return _this.apply(context, args.concat(...arguments));
        }
    }
}

Function.prototype.bind = function (context) {
    let self = this; //此时this指向 test
    let args = [...arguments].slice(1);//转换成数组
    return function () {
        return self.apply(context, args);
    }
}

// https://zhuanlan.zhihu.com/p/85438296
