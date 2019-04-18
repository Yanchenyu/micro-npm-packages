/**
 * @description 出现次数最多
 */

var a = 'afjghdfraaaasdenas';

function mostfrequently(string) {
    if (!string || typeof string !== 'string') return;
    let obj = {},
        mostStringItem;
    string = string.split('');
    string.forEach(item => {
        if (!obj[item]) {
            obj[item] = 1;      // 这里初始值一定要是1，除非上面判断改成obj[item] === undefined
        } else {
            obj[item] += 1;
        }
    });
    let func = (a, b) => {
        if (a < b) {
            return -1
        } else if (a > b) {
            return 1
        } else {
            return 0
        }
    };
    let max = Object.values(obj).sort(func).reverse();
    for (let i in obj) {
        if (obj[i] === max[0]) {
            mostStringItem = i
        }
    }
    return mostStringItem
}

console.log(mostfrequently(a));
