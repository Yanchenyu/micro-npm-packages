/**
 * @description 选择排序
 */

// 思路：从未排序的数中选出一个最小值，放到已排序的数组第一位，依次遍历

/**
 * 
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

    从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。
    
    （如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */

function selectSort(nums) {

    let l = nums.length;

    for (let i = 0; i < l - 1; i++) {

        // 默认从当前索引开始为最小值，依次往后进行比较
        let minIndex = i;

        for (let j = i + 1; j < l - 1; j++) {
            // 如果有更小的数，就把最小的下标标记为它
            if ( nums[minIndex] > nums[j] ) {
                minIndex = j;
            }

        }

        if (minIndex !== i) {
            // 只有不相同的时候才会进行换位
            [ nums[i], nums[minIndex] ] = [ nums[minIndex], nums[i] ];
        }

    }

    return nums;

}
