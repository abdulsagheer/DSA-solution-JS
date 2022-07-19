function findMinDiff(arr, n, m)
{    
    // If there are no chocolates or
    // number of students is 0
    if (m == 0 || n == 0)
        return 0;
   
    // Sort the given packets
    arr.sort(function(a, b){return a - b});
   
    // Number of students cannot be
    // more than number of packets
    if (n < m)
        return -1;
   
    // Largest number of chocolates
    let min_diff = Number.MAX_VALUE;
   
    // Find the subarray of size m such that 
    // difference between last (maximum in 
    // case of sorted) and first (minimum in
    // case of sorted) elements of subarray 
    // is minimum.
    for(let i = 0; i + m - 1 < n; i++)
    {
        let diff = arr[i + m - 1] - arr[i];
           
        if (diff < min_diff)
            min_diff = diff;
    }
    return min_diff;
}
  
// Driver code
let arr = [12, 4, 7, 9, 2, 23, 25, 
           41, 30, 40, 28, 42, 30, 
           44, 48, 43, 50];
              
// Number of students
let m = 7; 
let n = arr.length;
  
console.log("Minimum difference is " + 
                findMinDiff(arr, n, m));

// Time Complexity: O(n Log n)