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

function flattenDeep(arr) {
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

console.log(flattenDeep(arr))

// 实现二：
