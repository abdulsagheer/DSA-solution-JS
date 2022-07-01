// Naive Method 

// const largeEle = arr => {
//     for (let i = 0; i < arr.length; i++) {
//         let large = true;
//         for (let j = 0; j < arr.length; j++) {
//             if(arr[j] > arr[i]) {
//                 large = false;
//                 break
//             }            
//         }
//         if(large == true) return i;        
//     }
//     return -1;
// }

// console.log(largeEle([1,1,1]));

// Time complexity - O(n2)
// Space complexity - O(n)

// Efficient approach

const largeEle = arr => {
    let res = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[res]) {
            res = i
        }        
    }
    return res;
}

console.log(largeEle([1, 20, 30, 40, 50, 60]));
