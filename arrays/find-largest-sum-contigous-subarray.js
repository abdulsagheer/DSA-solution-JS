const maxSubArraySum = (a, size) => {
  var maxint = Math.pow(2, 53);
  var max_so_far = -maxint - 1;
  var max_ending_here = 0;

  for (var i = 0; i < size; i++) {
    max_ending_here = max_ending_here + a[i];
    if (max_so_far < max_ending_here) max_so_far = max_ending_here;

    if (max_ending_here < 0) max_ending_here = 0;
  }
  return max_so_far;
}


var a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log("Maximum contiguous sum is", maxSubArraySum(a, a.length));

// Time Complexity: O(n) 

const maxSubArraySums = (a, size) => {
  let max_so_far = a[0];
  let curr_max = a[0];

  for (let i = 1; i < size; i++) {
    curr_max = Math.max(a[i], curr_max + a[i]);
    max_so_far = Math.max(max_so_far, curr_max);
  }

  return max_so_far;
}

// Driver code

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let size = a.length;
console.log("Maximum contiguous sum is ", maxSubArraySums(a, size));

// Time Complexity: O(n) 
