// Naive Implementation

let palindromeArray = (arr) => {
  //initialize to true
  let isPalindrome = true;

  //loop through half length of the array
  for (let i = 0; i < arr.length / 2; i++) {
    //check if first half is equal to the second half
    if (arr[i] !== arr[arr.length - i - 1]) {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

console.log(palindromeArray([1, 2, 2, 1]));
console.log(palindromeArray([1, 2, 2, 2]));

// Efficient Implementation
let palindromeArrays = (arr, start = 0, end = arr.length - 1) => {
    //if array has only element
    if(start >= end){
      return true;
    }
    
    //if start is equal to end
    if(arr[start] === arr[end]){
      //call the same function
      return palindromeArray(arr, start + 1, end - 1);
    }else{
      //else not palindrome
      return false;
    }
}


console.log(palindromeArrays([1,2,2,1]));
console.log(palindromeArrays([1,2,2,2]));


// Time complexity: O(n).
// Space complexity: O(n).

