/**
 * @param {number[]} nums
 * @param {number} target
 * @return {string}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i < nums.length - 1; i++) {
        let a;
        let b;
        for (let k = i + 1; k < nums.length; k++) {
            if (nums[i] + nums[k] === target) {
                a = nums[i]
                b = nums[k]
                return `${a},${b}`
            }
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 13))
/**
 *
 */