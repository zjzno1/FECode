const sass = require('node-sass')
const fs= require('fs')
const csstree = require('css-tree');
let convertCss= function (scssFilePath) {
     return new Promise((resolve,reject) => {
         sass.render({
                 file: scssFilePath
             },
             function (err, result) {
                 if(err){
                     reject(err)
                 }else {
                     let css = result.css.toString()
                     resolve(css)
                     fs.writeFile('out.css', css, function () {
                         console.log('scss转换为css后写入到out.css')
                     })
                 }
             })
     })
}

let createCode = async function () {
    let cssString = await convertCss('./css/index.scss');
    let ast = csstree.parse(cssString)
    let copy = csstree.clone(ast);
    fs.writeFile('ast.txt', JSON.stringify(ast), function () {
        console.log('ast分析代码写入到ast.txt')
    })
    csstree.walk(copy, function (node, item, list) {
        console.log(11111, node.type,'____', node.value)
        if (node.type === 'Dimension') {
            node.value = (node.value / 1.745).toFixed(3)
            console.log(node)
        }
    });
    let transCode = csstree.generate(copy)+''
    transCode = transCode.replace(/px/g,'rem')
     // console.log(transCode)
    fs.writeFile('transCode.css', transCode, function () {
        console.log('最终代码写入到transCode.css')
    })
}
createCode()