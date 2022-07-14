// Naive Implementation

const maxSum = arr => {
    let res = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let curr = 0;
        for (let j = i; j < arr.length; j++) {
            curr += arr[i];
            res = Math.max(res, curr);
        }
    }
    return res; 
}

console.log(maxSum([1, -2, 3, -1, 2]));

// Time complexity - O(n2)

const maxSums = (arr, sum) => {
    let res = arr[0];
    let maxEnding = arr[0];
    for (let i = 1; i < arr.length; i++) {
        maxEnding = Math.max(maxEnding + arr[i], arr[i]);
        res = Math.max(res, maxEnding);
    }
    return res;
}

console.log(maxSums([1, -2, 3, -1, 2]));

// Time complexity - O(n)