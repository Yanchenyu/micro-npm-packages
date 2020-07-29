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

// 这种快速排序的时间要比冒泡排序执行时间慢了10倍左右，因为利用了额外的数组，并且用了push

// 第二种

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
    partitionIndex;
    if (left < right) {
        partitionIndex = partition(arr, left, right);

        quickSort(arr, left, partitionIndex - 1);

        quickSort(arr, partitionIndex + 1, right);

    }

    return arr;
}

function partition(arr, left, right) {
    let pivot = left;       // 基准数
    let index = pivot + 1;  // index是要把基准数换到中间的位置

    for (let i = index; i <= right; i++) {

        // 从基准数后一位开始一直到最右侧

        if (arr[i] < arr[pivot]) {
            // 如果有小于基准数的，则将它交换到index的位置
            swap(arr, i, index);
            // 同时基准数的交换位置后移
            index++;
        }

    }

    // 此时，遍历结束，从pivot的初始位置，到现在的index-1，这中间的数都是小于基准数的
    // 开始交换基准数的位置
    swap(arr, pivot, index - 1);

    return index - 1;

}
