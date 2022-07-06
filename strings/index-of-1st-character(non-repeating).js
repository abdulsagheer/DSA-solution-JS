// You are given a string consisting of only lower case and upper case englosh alphabets and integers 0 - 9.
// Write a function that will taje thus string as input and return the index of the first character that is non-repeating.

// Brute force method

// function nonRepeat(str) {
//     let repeat;
//     for (let i = 0; i < str.length; i++) {
//         repeat = false;
//         for (let j = 0; j < str.length; j++) {
//             if(str[i] == str[j] && i!==j) {
//                 repeat = true;
//             }            
//         }
//         if(repeat === false) {
//             return i;
//         }
//     }
//     return null;
// }

// //'abcdbad'

// str = "abacdefghefegghi";

// console.log(nonRepeat(str))

// Time complexity - O(n2)
// Space complexity - O(1)

// Method - 2 (Hash table)

function nonRepeat(str) {
    const ht = {};
    for (let i = 0; i < str.length; i++) {
        if(str[i] in ht) {
            ht[str[i]]++;
        } else {
            ht[str[i]]=1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if(ht[str[i]] === 1) {
            return i;
        }        
    }
    return null;
}

str = "aacdefghefegghi";

console.log(nonRepeat(str))

// Time complexity - O(n)
// Space complexity - O(1)
