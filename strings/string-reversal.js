
const reverseStr = str => {
    // return str.split('').reverse().join('');

    // let res = "";
    // for (let i = 0; i < str.length; i++) {
    //     const char = str[i];
    //     res = char + res;
    // }
    // return res;

    return str.split('').reduce((output, char) => {
        output += char;
        return output;
    }, "")

}

console.log(reverseStr("Hello"));

// Time complexity - O(n) 
// Space complexity - O(n)