// Naive Implementation

const majorityElement = arr => {
    for (let i = 0; i < arr.length; i++) {
        let count = 1;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                count++;
            }
        }
        if(count > (arr.length)/2) {
            return i;
        }
    }
    return -1;
}

console.log(majorityElement([8, 7, 6, 8, 6, 6, 6 ,6 ,6 ]))

// Time complexity - O(n2)

const findMajority = arr => {
    let res = 0, count = 1;
    for (let i = 1; i < arr.length; i++) {
        if(arr[res] == arr[i]) count++;
        else count--;
        if(count == 0) {
            res = i;
            count = 1
        }
    }
    count = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[res] == arr[i]) count++;
    }
    if(count <= (arr.length)/2) res = -1;
    return res;
}

console.log(findMajority([8, 7, 6, 8, 6, 6, 6 ,6 ,6 ]));

// Time complexity - O(n)