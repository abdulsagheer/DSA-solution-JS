const getPairsCount = (arr,n,k) => {
    let m = {};

    for (let i = 0; i < n; i++) {
        if(m[arr[i]])
            m[arr[i]]++;
        else
            m[arr[i]] = 1;
    }
    
    let twice_count = 0;
    for (let i = 0; i < n; i++) {
        twice_count += m[k - arr[i]] ? m[k-arr[i]] : 0;
        if (k - arr[i] == arr[i]) twice_count--;
    }

    return twice_count / 2;
}

console.log(getPairsCount([10,20,30,40,50], 5, 2))

// Time Complexity: O(N)
// Auxiliary Space: O(N)