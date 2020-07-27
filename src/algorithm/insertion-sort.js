/**
 * @description 插入排序
 */

// 思路：依次取数，和它前面所有的数依次比较，如果小于前面一个数，就插到它前面去，一直到大于前面一个数就停住
function insertionSort(nums) {

    for (let i = 1, l = nums.length; i < l; i++) {

        let currentNum = nums[i];

        for (let j = i - 1; j >= 0; j--) {
            // 遍历当前数之前的所有数，从前一个往前
            if (currentNum < nums[j]) {
                // 如果当前数字小于前一个，则换个位置
                // 这里注意，当前的数字要始终保留，因为要和前面一个一个对比
                // 所以这里不能直接用nums[i]，而是要用nums[j+1]，因为nums[i]不变
                [nums[j], nums[j + 1]] = [currentNum, nums[j]]

            } else {
                break;
            }

        }

    }
    return nums
}

var a = [4, 1, 2, 5, 3, 7, 9, 3, 2, 12, 11];

console.log(insertionSort(a));