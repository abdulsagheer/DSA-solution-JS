// Naive implementation

const maxDiff = arr => {
    let res = arr[1] - arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length; j++) {
            res = Math.max(res, arr[j] - arr[i]);
        }
    }
    return res;
}

console.log(maxDiff([10, 65, 10, 25, 01, 585,30, 25, 585,30, 25, 585,30, 25, 585,30, 25, 585,30, 25, 585,30, 25, 585,30,]))

// Time complexity - O(n2)

// Efficient Implementation

const maxDiffs = arr => {
    let res = arr[1] - arr[0], minVal = arr[0];
    for (let j = 1; j < arr.length; j++) {
        res = Math.max(res, arr[j] - minVal);
        minVal = Math.min(minVal, arr[j]);
    }
    return res;
}

console.log(
  maxDiffs([
    10, 65, 10, 25, 01, 585, 30, 25, 585, 30, 25, 585, 30, 25, 585, 30, 25, 585,
    30, 25, 585, 30, 25, 585, 30,
  ])
);