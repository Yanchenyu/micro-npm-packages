/**
 * @description 冒泡排序
 */

// step 1
// 思路：按顺序每次取一个值，依次去和后面每一项做对比，如果大于它，就和它换个位置，然后依次类推
function sort1(arr) {
    if (!Array.isArray(arr)) return;
    for (let i = 0,l = arr.length; i < l - 1; i++) {
        // 这里有个小细节，就是一轮循环不要取到最后一个值，原因是最后一个不需要再进行比较
        for (let j = i + 1; j < l; j++) {
            // 二轮循环因为是依次取每个位置的值和当前一轮所取的值作对比，所以要取到最后一个值
            if (arr[i] > arr[j]) {
                let item = arr[i];
                arr[i] = arr[j];
                arr[j] = item;
            }
        }
    }
    return arr
}

function sort2(arr) {

    function equal(a,b) {
        if (a<b) {
            return -1
        } else if (a>b) {
            return 1
        } else {
            return 0
        }
    }
    if (!Array.isArray(arr)) return;
    return arr.sort(equal)
}

var a = [1,22,3,3,5,4,2,21,12,43];

console.log(sort1(a));

// 经过对比，sort2的执行时间会比sort1快0.003ms左右