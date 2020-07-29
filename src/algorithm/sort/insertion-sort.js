/**
 * @description 插入排序
 */

// 思路：依次取数，和它前面所有的数依次比较，如果小于前面一个数，就插到它前面去，一直到大于前面一个数就停住


/**
 * 
 * @param {*} nums 
 * 将第一待排序序列第一个元素看做一个有序序列，把第二个元素到最后一个元素当成是未排序序列。

    从头到尾依次扫描未排序序列，将扫描到的每个元素插入有序序列的适当位置。（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）
 */


function insertionSort(nums) {

    let l = nums.length;

    for (let i = 0; i < l - 1; i++) {

        for (let j = i + 1; j > 0; j--) {

            if (nums[j] < nums[j - 1]) {
                
                [ nums[j], nums[j - 1] ] = [ nums[j - 1], nums[j] ];

            } else {

                break;

            }

        }

    }

    return nums;

}

var a = [4, 1, 2, 5, 3, 7, 9, 3, 2, 12, 11];

console.log(insertionSort(a));