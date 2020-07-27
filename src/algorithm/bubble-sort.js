/**
 * @description 冒泡排序
 */

// step 1
// 思路：按顺序每次取一个值，依次去和后面每一项做对比，如果大于它，就和它换个位置，然后依次类推
function sort(arr) {
    if (!Array.isArray(arr)) return;
    for (let i = 0,l = arr.length; i < l - 1; i++) {
        // 这里有个小细节，就是一轮循环不要取到最后一个值，原因是最后一个不需要再进行比较
        for (let j = i + 1; j < l; j++) {
            // 二轮循环因为是依次取每个位置的值和当前一轮所取的值作对比，所以要取到最后一个值
            if (arr[i] > arr[j]) {
                // es5写法
                // let item = arr[i];
                // arr[i] = arr[j];
                // arr[j] = item;

                // es6写法
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr
}

var a = [1,22,3,3,5,4,2,21,12,43];

console.log(sort(a));