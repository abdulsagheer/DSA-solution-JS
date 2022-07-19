function find3Numbers(A,arr_size,sum)
    {
        // Fix the first element as A[i]
        for (let i = 0; i < arr_size - 2; i++) {
  
            // Find pair in subarray A[i+1..n-1]
            // with sum equal to sum - A[i]
            let s = new Set();
            let curr_sum = sum - A[i];
            for (let j = i + 1; j < arr_size; j++) 
            {
                if (s.has(curr_sum - A[j])) 
                {
                    console.log(
                    "Triplet is " +A[i]+", "+A[j]+", "+
                    (curr_sum - A[j])
                    );
                    
                    return true;
                }
                s.add(A[j]);
            }
        }
  
        // If we reach here, then no triplet was found
        return false;
    }
    
    /* Driver code */
    let A=[1, 4, 45, 6, 10, 8];
    
    let sum = 22;
    let arr_size = A.length;
    find3Numbers(A, arr_size, sum);


// Time complexity: O(N^2) 
// Auxiliary Space: O(N)