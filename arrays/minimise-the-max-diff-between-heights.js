const getMinDiff = (arr, n, k) => {
  arr.sort((a, b) => a - b);
  let ans = arr[n - 1] - arr[0]; // Maximum possible height difference

  let tempmin, tempmax;
  tempmin = arr[0];
  tempmax = arr[n - 1];

  for (let i = 1; i < n; i++) {
    tempmin = Math.min(arr[0] + k, arr[i] - k); // Minimum element when we
    // add k to whole array
    tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); // Maximum element when we
    // subtract k from whole array
    ans = Math.min(ans, tempmax - tempmin);
  }
  return ans;
}

// Driver Code Starts
let k = 6,
  n = 6;
let arr = [7, 4, 8, 8, 8, 9];
let ans = getMinDiff(arr, n, k);
console.log(ans, "</br>");

// Time Complexity: O(nlogn)
// Auxiliary Space: O(n)