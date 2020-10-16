/**
 * @description Array sort排序
 */

function compare(a, b) {
    if (a < b) {
        return -1
    } else if (a > b) {
        return 1
    } else {
        return 0
    }
}

function sort2(arr) {
    if (!Array.isArray(arr)) return;
    return arr.sort(compare)
}

// 经过对比，执行时间确实是最快的(0.003ms左右)
