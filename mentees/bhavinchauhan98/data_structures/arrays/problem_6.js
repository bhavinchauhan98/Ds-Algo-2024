// Count Number of Pairs With Absolute Difference K

// Given an integer array nums and an integer k, return the number of pairs (i, j) where i < j such that |nums[i] - nums[j]| == k.

// The value of |x| is defined as:

// x if x >= 0.
// -x if x < 0.
 
// Input: nums = [1,2,2,1], k = 1
// Output: 4

function noOfPairs(nums, k) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) === k) {
                result++;
            }
        }
    }
    return result;
}

function main() {
    const nums = [1,2,2,1];
    const k = 1;

    return noOfPairs(nums, k)
}

console.log(main())