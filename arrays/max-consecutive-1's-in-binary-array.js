// Naive Implementation

const maxConsecutiveOne = arr => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        let curr = 0;
        for (let j = 0; j < arr.length; j++) {
            if(arr[j] == 1) curr++;
            else break;
        }
        res = Math.max(curr, res);
    }
    return res;
}

console.log(maxConsecutiveOne([1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]))

// Time complexity - O(n2)
// Space complexity - O(1)

// Efficient Implementation

const maxConsecutiveOnes = arr => {
    let res = 0, curr = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == 0) {
            curr = 0;
        } else {
            curr++;
            res = Math.max(res, curr);
        }
    }
    return res;
}
console.log(maxConsecutiveOnes([1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));


// Time complexity - O(n)
// Space complexity - O(1)