// Naive Implementation

var nextPermutation = function (nums) {
  let decrease = -1;
  const n = nums.length;
  for (let i = n - 2; i >= 0; i--) {
    if (nums[i] < nums[i + 1]) {
      decrease = i;
      break;
    }
  }
  if (decrease === -1) {
    return reverse(nums, 0, n - 1);
  } else {
    for (let i = n - 1; i > decrease; i--) {
      if (nums[i] > nums[decrease]) {
        // swap i & decrease
        [nums[i], nums[decrease]] = [nums[decrease], nums[i]];
        reverse(nums, decrease + 1, n - 1);
        break;
      }
    }
  }
  return;
};
function reverse(arr, l, r) {
  let i = l,
    j = r;
  while (i < j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
    i++;
    j--;
  }
}

console.log(nextPermutation([1, 2, 3]));

// Time complexity - O(n)

// Efficient Implementation

var nextPermutations = function (nums) {
  if (nums.length == 1) {
    return;
  }
  if (nums.length == 2) {
    nums = nums.reverse();
    return;
  }
  var p1 = -1,
    p2 = -1;
  for (let i = nums.length - 1; i >= 1; i--) {
    if (nums[i] > nums[i - 1]) {
      p1 = i - 1;
      break;
    }
  }
  if (p1 == -1) {
    nums = nums.reverse();
    return;
  }
  let min = Number.POSITIVE_INFINITY;
  for (let i = p1 + 1; i < nums.length; i++) {
    if (nums[i] > nums[p1] && nums[i] <= min) {
      min = nums[i];
      p2 = i;
    }
  }
  let temp = nums[p1];
  nums[p1] = nums[p2];
  nums[p2] = temp;
  var arr = nums.slice(0, p1 + 1).concat(nums.slice(p1 + 1).reverse());
  arr.forEach((val, i) => (nums[i] = arr[i]));
};

console.log(nextPermutations([1, 2, 3]));

// Time complexity - O(n)