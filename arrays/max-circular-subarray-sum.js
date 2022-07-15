// Naive Implementation

const maxCircularSum = arr => {
    let res = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let curr_max = arr[i];
        let curr_sum = arr[i];
        for (let j = 1; j < arr.length; j++) {
            let index = (i+j) % arr.length;
            curr_sum += arr[index];
            curr_max = Math.max(curr_max, curr_sum);
        }
        res = Math.max(res, curr_max);
    }
    return res;
}

console.log(maxCircularSum([5, -2, 3, 4]))

// Time Complexity - O(n2)

// Efficient Implementation
const normalMaxSum = arr => {
    let res = 0, maxEnding = arr[0];
    for (let i = 0; i < arr.length; i++) {
        maxEnding = Math.max(arr[i], maxEnding+arr[i])
        res = Math.max(res, maxEnding);
    }
    return res;
}
const overallMaxSum = arr => {
    let max_normal = normalMaxSum(arr, arr.length);
    if(max_normal < 0) {
        return max_normal;
    }
    let arr_sum = 0;
    for (let i = 0; i < arr.length; i++) {        
        arr_sum += arr[i]
        arr[i] = -arr[i]
    }
    let max_circular = arr_sum + normalMaxSum(arr, arr.length);
    return Math.max(max_normal, max_circular)
}

console.log(overallMaxSum([5, -2, 3, 4]));