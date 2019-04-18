/**
 * @description 快速排序
 */

// 思路：取一个值（默认第一个），然后将后面的所有值与之对比，分为两个数组，小于等于，和大于，
// 然后利用递归，再对这两个数组再进行比较，再拆分两个数组，以此类推

function quickSort(arr) {

    if (arr.length <= 1) return arr;

    let leftArr = [],
        rightArr = [],
        q = arr[0];
    for (let i = 1, l = arr.length; i < l; i++) {
        if (arr[i] > q) {
            rightArr.push(arr[i])
        } else {
            leftArr.push(arr[i])
        }
    }
    return [].concat(quickSort(leftArr), [q], quickSort(rightArr))
}

// 快速排序的时间要比冒泡排序执行时间慢了10倍左右
