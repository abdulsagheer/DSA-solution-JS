const subArrayExists = (arr) => {
  const sumSet = new Set();

  // Traverse through array
  // and store prefix sums
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    // If prefix sum is 0
    // or it is already present
    if (sum === 0 || sumSet.has(sum)) return true;

    sumSet.add(sum);
  }
  return false;
};

// Driver code

const arr = [-3, 2, 3, 1, 6];
if (subArrayExists(arr)) console.log("Found a subarray with 0 sum");
else console.log("No Such Sub Array Exists!");

// Time Complexity: O(n)
// Space Complexity: O(n)