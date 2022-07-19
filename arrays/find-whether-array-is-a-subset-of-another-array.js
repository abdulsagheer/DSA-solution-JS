// Naive Implementation
function isSubset(arr1, arr2, m, n)
    {
        let i = 0;
        let j = 0;
        for (i = 0; i < n; i++) {
            for (j = 0; j < m; j++)
                if (arr2[i] == arr1[j])
                    break;
 
            /* If the above inner loop
            was not broken at all then
            arr2[i] is not present in
            arr1[] */
            if (j == m)
                return false;
        }
 
        /* If we reach here then all
        elements of arr2[] are present
        in arr1[] */
        return true;
        // Driver Code
            arr1 = [ 11, 1, 13, 21, 3, 7 ];
            arr2 = [ 11, 3, 7, 1 ];
         
            m = arr1.length;
            n = arr2.length;
         
            if (isSubset(arr1, arr2, m, n))
              console.log("arr2[] is "
                             + "subset of arr1[] ");
            else
              console.log("arr2[] is "
                            + "not a subset of arr1[]");
    }
 
 
// Time Complexity: O(m*n)
// Auxiliary Space : O(1)


function isSubset(arr1,m,arr2,n)
{
    // Create a Frequency Table using STL
    let frequency = new Array(arr1);
     
    // Increase the frequency of each element
    // in the frequency table.
    for (let i = 0; i < m; i++)
    {
        frequency[arr1[i]]++;
    }
    // Decrease the frequency if the
    // element was found in the frequency
    // table with the frequency more than 0.
    // else return 0 and if loop is
    // completed return 1.
    for (let i = 0; i < n; i++)
    {
        if (frequency[arr2[i]] > 0)
            frequency[arr2[i]]--;
        else
        {
            return false;
        }
    }
    return true;
}
 
// Driver Code
    let arr1 = [11, 1, 13, 21, 3, 7 ];
    let arr2 = [ 11, 3, 7, 1 ];
    let m = arr1.length;
    let n = arr2.length;
 
    if (isSubset(arr1, m, arr2, n))
        console.log("arr2[] is subset of arr1[] "
            + "\n");
    else
        console.log("arr2[] is not a subset of arr1[] "
            + "\n");

// Time Complexity: O(m+n) 
// Auxiliary Space: O(n)