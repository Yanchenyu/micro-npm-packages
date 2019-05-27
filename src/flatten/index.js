/**
 * @description 数组扁平化（支持无限嵌套）
 * @author yancy
 * @example 
 * var arr = [1,2,[3,4,[5,[6]]],7,8,[9,10,[11]]];
 * flattenDeep(arr);    // [1,2,3,4,5,6,7,8,9,10,11];
 */


var arr = [1,2,[3,4,[5,[6]]],7,8,[9,10,[11]]];


// 实现一：传统递归形式

var dataType = require('../type/index.js');

function flattenDeep1(arr) {
    if (!dataType.isArray(arr)) return
    var newArr = [];
    for (var i = 0,l = arr.length; i < l; i++) {
        if (dataType.isArray(arr[i])) {
            newArr = newArr.concat(flattenDeep(arr[i]));
        } else {
            newArr.push(arr[i]);
        }
    }
    return newArr
}

// console.log(flattenDeep1(arr))

// 实现二：reduce实现递归
function flattenDeep2(arr) {
    if (!dataType.isArray(arr)) return
    return arr.reduce((prev, next) => {
        return prev.concat(dataType.isArray(next) ? flattenDeep2(next) : next)
    }, [])
}

// console.log(flattenDeep2(arr))

// 实现三：利用es6的扩展运算符，每次执行扩展运算符可以扁平化一层
function flattenDeep3(arr) {
    if (!dataType.isArray(arr)) return
    while (arr.some(item => dataType.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

console.log(flattenDeep3(arr))
