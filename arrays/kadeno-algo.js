var maxSubArray = function (nums) {
  let maxSoFar = nums[0];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let current = nums[i];
    maxSoFar = Math.max(current, current + maxSoFar);
    max = Math.max(max, maxSoFar);
  }
  return max;
};


console.log(maxSubArray([1, 5, 6, 1, 4,]))

// Time complexity - O(n)