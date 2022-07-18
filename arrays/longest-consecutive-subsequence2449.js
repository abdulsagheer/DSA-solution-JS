function findLongestConseqSubseq(arr, n) {
    let ans = 0, count = 0;

    // sort the array
    arr.sort(function (a, b) { return a - b; })

    var v = [];
    v.push(arr[0]);

    //insert repeated elements only once in the vector
    for (let i = 1; i < n; i++) {
        if (arr[i] != arr[i - 1])
            v.push(arr[i]);
    }
    // find the maximum length
    // by traversing the array
    for (let i = 0; i < v.length; i++) {

        // Check if the current element is equal
        // to previous element +1
        if (i > 0 && v[i] == v[i - 1] + 1)
            count++;
        // reset the count
        else
            count = 1;

        // update the maximum
        ans = Math.max(ans, count);
    }
    return ans;
}

// Driver code

let arr = [1, 2, 2, 3];
let n = arr.length;
console.log(
"Length of the Longest contiguous subsequence is "
+findLongestConseqSubseq(arr, n)
);

     // This code is contributed by Potta Lokesh
  


// Time complexity: O(nLogn). 
// Auxiliary space : O(1). 