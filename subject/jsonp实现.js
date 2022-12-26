function jsonp(options) {
    // 设置默认初始值
    var defaultObj = {
        url: '',
        jsonpCallback: 'jsonpCallback',
        data: {},
        success: function (data) { }
    }
    // 传入参数的拼接
    var dataStr = '';
    // 合并传入新值
    for (var attr in options) {
        defaultObj[attr] = options[attr];
    }
    // 拼接传入的参数
    for (var key in defaultObj.data) {
        dataStr += `key=${defaultObj.data[key]}&`
    }
    window[defaultObj.jsonpCallback] = function (data) {
        defaultObj.success(data);
    }
    // 生成script，回调执行callback
    var script = document.createElement('script');
    script.src = `${defaultObj.url}?${dataStr}&${defaultObj.jsonpCallback}=${defaultObj.jsonpCallback}`;
    // 获取head元素，把生成的script标签放到script后面
    var head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
}

jsonp({
    url: 'http://libpre.cnsuning.com/api/jsonp/snjw.jsonp',
    jsonpCallback: 'cmsCallback',
    data: {
        a: 1,
        b: 2
    },
    success: function (data) {
        console.log(112233, data);
    }
})
