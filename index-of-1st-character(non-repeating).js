// You are given a string consisting of only lower case and upper case englosh alphabets and integers 0 - 9.
// Write a function that will taje thus string as input and return the index of the first character that is non-repeating.

// Brute force method

function nonRepeat(str) {
    let repeat;
    for (let i = 0; i < str.length; i++) {
        repeat = false;
        for (let j = 0; j < str.length; j++) {
            if(str[i] == str[j] && i!==j) {
                repeat = true;
            }            
        }
        if(repeat === false) {
            return i;
        }
    }
    return null;
}

//'abcdbad'

str = "abacdefghefegghi";

console.log(nonRepeat(str))

// Time complexity - O(n2)
// Space complexity - O(1)