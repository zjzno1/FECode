// 实现一个原生的promise

// 定义promise中的三个状态
const PADDING = 'padding';
const RESOVED = 'resoved';
const REJECTED = 'regected';

// 判断当前环境是node还是浏览器，异步执行函数
function asyncFn(fn) {
    if(typeof window) {
        // 浏览器环境，使用Object.observe(同为微队列)
        let obj = {a:1};
        if (obj.a <1000) {
            obj.a++;
        } else {
            obj.a = 1;
        }
        // 
        let html = document.querySelector('html');
        var options = {
            'childList': true,
            'attributes': true,
            'characterData': true,
        };

        var observer = new MutationObserver(function (html,options) {
            console.log(111);
        });
        html.innerHTML = 1;
        Object.observe(obj, function (fn) {
            console.log(123);
        });
    }
}

// promise方法，接收一个参数fn
function myPromise(fn) {
    // 获得当前的this
    var _this = this;
    // 获得当前的状态和值
    _this.currentSate = PADDING;
    _this.value = undefined;
    // 以下两个数组用于缓存then方法的回调，切每个实例只保存一个
    _this.resovedCallbackArr = [];
    _this.rejectedCallbackArr = [];

    // resove和rejecte的私有方法
    _this.resove = function (value) {
        if (value instanceof myPromise) {
            // 如果value是一个promise对象，递归执行
            return value.then(_this.resove, _this.reject);
        }
        // 否则异步执行，保证执行顺序
        // 判断当前是在浏览器环境还是node环境
        setTimeout(() => {
            // 如果当前状态是PADDING时，执行下面代码
            if (_this.currentSate === PADDING) {
                _this.currentSate = RESOVED;
                _this.value = value;
                _this.resovedCallbackArr.forEach(cb => cb());  
            }
        });
    }

    _this.reject = function (reason) {
        setTimeout(() => {
            if (_this.currentSate === PADDING) {
                _this.currentSate = REJECTED;
                _this.value = reason;
                _this.rejectedCallbackArr.forEach(cb => cb());
            }
        });
    }
    // 用于解决以下问题
    // new Promise(() => throw Error('error))
    try {
        fn(_this.resove, _this.reject);
    } catch(e) {
        _this.reject(e);
    }
}

// 实现promise的then方法

myPromise.prototype.then = function (onResoved, onRejected) {
    var _this = this;
    var promise2;
    // 判断onResoved和onRejected是否为函数
    onResoved = typeof onResoved === 'function' ? onResoved : v => v;
    onRejected = typeof onRejected === 'function' ? onRejected: r => {throw r};
    
    if (_this.currentSate === RESOVED) {
        return (promise2 = function (resolve, reject) {
            setTimeout(() => {
             try {

             }catch (e) {

             }
            });
        });
    }

}