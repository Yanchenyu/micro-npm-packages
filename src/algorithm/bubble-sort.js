/**
 * @description 冒泡排序
 */

// step 1
function sort1(arr) {
    if (!Array.isArray(arr)) return;
    for (let i = 0,l = arr.length; i < l - 1; i++) {
        for (let j = i + 1; j < l; j++) {
            if (arr[i] > arr[j]) {
                let item = arr[i];
                arr[i] = arr[j];
                arr[j] = item;
            }
        }
    }
    return arr
}

var a = [1,22,3,3,5,4,2,21,12,43];

console.log(sort1(a));
