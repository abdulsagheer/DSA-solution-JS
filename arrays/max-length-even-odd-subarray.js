// Naive Implementation

const maxEvenOdd = arr => {
    let res = 1;
    for (let i = 0; i < arr.length; i++) {
        let curr = 1;
        for (let j = i+1; j < arr.length; j++) {
            if((arr[j] % 2 == 0 && arr[j - 1] % 2 != 0) || (arr[j] % 2 == 0 && arr[j - 1] % 2 != 0)) {  
                curr++;
            } else {
                break;
            }
        }
        res = Math.max(res, curr);
    }
    return res;
}

console.log(maxEvenOdd([5, 10, 20, 6, 3, 8]))

// Time complexity - O(n2)

const maxEvenOdds = arr => {
    let res = 1;
    let curr = 1;
    for (let i = 0; i < arr.length; i++) {
        if((arr[i] % 2 == 0 && arr[i - 1] % 2 != 0) || (arr[i] % 2 != 0  && arr[i - 1] == 0)) {
            curr++;
            res = Math.max(res, curr);
        } else {
            curr = 1;
        }
    }
    return res;
}

console.log(maxEvenOdds([5, 10, 20, 6, 3, 8]));