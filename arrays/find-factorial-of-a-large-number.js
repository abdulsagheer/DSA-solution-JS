function factorial(n) {
  let res = new Array(500);

  // Initialize result
  res[0] = 1;
  let res_size = 1;

  // Apply simple factorial formula n! = 1 * 2 * 3 * 4...*n
  for (let x = 2; x <= n; x++) res_size = multiply(x, res, res_size);

console.log("Factorial of given number is " + "<br>");
  for (let i = res_size - 1; i >= 0; i--) console.log(res[i]);
}


function multiply(x, res, res_size) {
  let carry = 0; // Initialize carry

  // One by one multiply n with individual digits of res[]
  for (let i = 0; i < res_size; i++) {
    let prod = res[i] * x + carry;

    // Store last digit of 'prod' in res[]
    res[i] = prod % 10;

    // Put rest in carry
    carry = Math.floor(prod / 10);
  }

  // Put carry in res and increase result size
  while (carry) {
    res[res_size] = carry % 10;
    carry = Math.floor(carry / 10);
    res_size++;
  }
  return res_size;
}

// Driver program
factorial(100);

// Time Complexity: O(nlogn!) n for loop  and logn! for while loop
// Auxiliary Space: O(MAX)