/**
 * @description 选择排序
 */

// 思路：从未排序的数中选出一个最小值，放到已排序的数组第一位，依次遍历

function selectionSort(arr) {
    if (!Array.isArray(arr)) return;
    let sortArr = [];
    for (let i = 0, l = arr.length; i<l; i++) {
        let min = Math.min(...arr);
        for (let j = 0;j<arr.length; j++) {
            if (arr[j] === min) {
                sortArr.push(arr[j])
                arr.splice(j, 1);
                break
            }
        }
    }
    return sortArr
}

// 上面的写法有一个问题，Math.min方法底层也是遍历一遍，那就是多了一层遍历

function selectionSort(arr) {
    if (!Array.isArray(arr)) return;
    let len = arr.length;
    let minIndex, item;
    for (let i = 0; i < len - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {     //寻找最小的数
                minIndex = j;                 //将最小数的索引保存
            }
        }
        item = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = item;
    }
    return arr;
}
