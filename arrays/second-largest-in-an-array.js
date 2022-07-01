// Naive implementation

// const secLar = arr => {
//     let largest = 0;
//     for (let i = 1; i < arr.length; i++) {
//         if(arr[i] > arr[largest]) {
//             largest = i;
//         }
//     }
//     return largest;
// }

// console.log(secLar([5, 20,12, 20]))

// Time complexity - O(n2)

const secLar = arr => {
    let res = 1,  lar = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > arr[lar]) {
            res = lar;
            lar = i;
        }
        else if(arr[i] != arr[lar]) {
            res = i;
        }
    }
    return res;
}

console.log(secLar([5, 20,12, 20]))

// Time complexity - O(n)
