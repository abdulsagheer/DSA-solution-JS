const segregateElements = (arr, n) => {
  // Create an empty array to store result
  let temp = new Array(n);

  // Traversal array and store +ve element in
  // temp array
  let j = 0; // index of temp
  for (let i = 0; i < n; i++) if (arr[i] >= 0) temp[j++] = arr[i];

  // If array contains all positive or all negative.
  if (j == n || j == 0) return;

  // Store -ve element in temp array
  for (let i = 0; i < n; i++) if (arr[i] < 0) temp[j++] = arr[i];

  for (let i = 0; i < n; i++) arr[i] = temp[i];
}

// Driver program

let arr = [1, -1, -3, -2, 7, 5, 11, 6];
let n = arr.length;

console.log(segregateElements(arr, n));

// Traversal
const moveNegative = nums => {
    let minArr = Array.from(Array(nums.length).fill(true));
  
    for(let i = 0; i < nums.length; i++){
      if(nums[i] > 0 && nums[i] <= minArr.length){
        minArr[nums[i]] = false;
      }
    }
   // start at 1st index to avoid 0
   for(let i = 1; i < minArr.length; i++){
      if(minArr[i]){
       return i;
      }
    }
  
  return minArr.length;
};

console.log(moveNegative([0, -5, 4, 7, 8, -85]))
