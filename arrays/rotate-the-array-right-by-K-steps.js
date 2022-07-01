// Given an array, rotate the array to the right by k steps, where k is non-negative.

// if length of the array and k are the same, then the elements of an array and Kth element is equal.

// const rotate = function (array, k) {
//   const length = array.length;
//   k = k % length;
//   const temp = array.slice(length - k);
//   for (let i = length - k - 1; i >= 0; i--) {
//     array[i + k] = array[i];
//   }
//   for (let i = 0; i < k; i++) {
//     array[i] = temp[i];
//   }
//   return array;
// };

// array = [1, 2, 3, 4, 5];
// console.log(rotate(array, 8))

// Method - 2

// [1, 2, 3, 4, 5, 6]

// k = 2

//reverse the array - [6, 5, 4, 3, 2, 1]

// and the output of the array by k = 2 was [5, 6, 1, 2, 3, 4]

// Observer that we need to reverse first k elements and reverse the rest of the elements.

// reverse from 0 to k-1 and reverse from K to length - 1

// Space complexity is - O(1)

// Time complexity is - O(n)

const reverse = (nums, start, end) => {
    while(start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}

const rotate = (nums, k) => {
    k = k % nums.length; // k = 102, after every 5 rotation we will get original value.
    reverse(nums, 0, nums.length - 1);
    // start = 0, end = k - 1 => which means 0 to k-1
    reverse(nums, 0, k-1)
    // start = l, end = length - 1 => which means k to length - 1
    reverse(nums, k, nums.length - 1)
    return nums;
}

console.log(rotate([1, 2, 3, 4, 5, 6], 2))

// Time complexity = O(n)
// Space complexity = O(1)

// [1, 2, 3, 4, 5, 6]