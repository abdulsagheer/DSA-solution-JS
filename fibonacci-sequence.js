//In the fibonacci sequence, each subsequent term is obtained by adding the preceding 2 terms. This is true for all the numbers except the first 2 numbers of
// the fibonacci series as they do not have 2 preceding numbers. The first 2 terms in the fibonacci series is 0 and 1. F(n) = F(n-1)+F(n-2) for n>1. Write a
// function thats finds F(n) given n where n is an integer greater than equal to 0. For the first term n = 0.

// Brute force

// function fibonacci(n) {
//     if(n <= 1) return n;
//     else return fibonacci(n-1)+fibonacci(n-2)
// }

// console.log(fibonacci(10))

// Time complexity - O(2n)
// Space complexity - O(n)

// Method - 2

// function fibonacci(n) {
//     const ht = {0:0, 1:1}
//     if(n in ht) {
//         return ht[n]
//     } else {
//         ht[n] = fibonacci(n-1) + fibonacci(n-2);
//         return ht[n]
//     }
// }

// console.log(fibonacci(10))

function fibonacci(n) {
    if(n <= 1) return n;
    let counter = 1;
    let prev = 0;
    let current = 1;
    let next;
    while(counter<n) {
        next = prev + current;
        prev=current;
        current=next;
        counter++;
    }
    return current;
}

console.log(fibonacci(10))