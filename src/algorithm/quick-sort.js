/**
 * @description 快速排序
 */

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
