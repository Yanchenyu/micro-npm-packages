/**
 * @description 选择排序
 */

// 思路：从未排序的数中选出一个最小值，放到已排序的数组第一位，依次遍历

function selectionSort(arr) {
    if (!Array.isArray(arr)) return;
    let len = arr.length;
    let minIndex;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        [ arr[i], arr[minIndex] ] = [ arr[minIndex], arr[i] ];
    }
    return arr;
}
