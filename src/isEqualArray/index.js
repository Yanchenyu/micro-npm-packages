/**
 * @description 数组判断是否完全等于（仅支持一层）
 * @author yancy
 * @example 
 * var a = [1,2,3];
 * var b = [2,1,3];
 * isEqualArray(a, b);   // true
 */

var dataType = require('../type/index.js');

function isEqualArray(value, other) {
    if (!dataType.isArray(value) || !dataType.isArray(other)) return
    
}
