/**
 * @description 对象判断是否完全等于（支持无限嵌套）
 * @author yancy
 * @example 
 * var a = { a: 1, c: 1, b: { a: { c: 1 } } };
 * var b = { a: 1, b: { a: { c: 1 } }, c: 1 };
 * isEqual(a, b);   // true
 */

var dataType = require('../type/index.js');

function isEqual(value, other) {
    // 普通全等
    if (value === other) {
        return true
    }
    // 这里我感觉只是针对NaN，不知道还有什么情况。。
    if (value == null || other == null || (!dataType.isObjectLike(value) && !dataType.isObjectLike(other))) {
        return value != value && other != other
    }
    // 
}

