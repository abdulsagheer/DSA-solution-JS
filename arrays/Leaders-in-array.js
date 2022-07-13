// Leader in an array - On right of an element, no element should be greater than that.

// Naive Implementation
const arrLeader = arr => {
    for (let i = 0; i < arr.length; i++) {
        let flag = false;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] <= arr[j]) {
                flag = true;
                break;
            }
        }
        if(flag == false) {
            console.log(arr[i]);
        }
    }
}

console.log(arrLeader([7, 10, 4, 10, 6, 5, 2]))

// Time complexity - O(n2)

// Efficient Implementation

const arrLeaders = arr => {
    let curr_ldr = arr[arr.length-1];
    console.log(curr_ldr);
    for (let i = arr.length - 2; i < arr.length; i++) {
        if(curr_ldr < arr[i]) {
            curr_ldr = arr[i];
            console.log(curr_ldr);
        }
    }
}

console.log(arrLeaders([7, 10, 4, 10, 6, 5, 2]));