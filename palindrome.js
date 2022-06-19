// You are given a string. Write a function to check whether the string is a palindrome or not.

// function palindrome(str) {
//     let newStr = ''
//     for(let i = str.length - 1;i>=0;i--) {
//         newStr+=str[i];
//     }
//     if(newStr === str) {
//         return str;
//     } else {
//         return false;
//     }
// }

// a='abba'
// console.log(palindrome(a))

// Time complexity - O(n2)
// Space complexity - O(n)

// Method - 2

// function palindrome(str) {
//     let newStr = []
//     for(let i = str.length - 1;i>=0;i--) {
//         newStr.push(str[i]);
//     }
//     if(newStr.join('') === str) {
//         return true;
//     } else {
//         return false;
//     }
// }

// a='abba'
// console.log(palindrome(a))

// Time complexity - O(n)
// Space complexity - O(n)

// Method - 3

function palindrome(str) {
    let i = 0;
    let j = str.length - 1;
    while(i<=j) {
        if(str[i]!== str[j]) return false;
        else {
            i++;
            j--;
        }
    }
    return true;
}

console.log(palindrome('abba'))

// Time complexity - O(n)
// Space complexity - O(1)