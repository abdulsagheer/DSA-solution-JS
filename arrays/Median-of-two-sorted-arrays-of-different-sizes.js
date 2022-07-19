function Median(A, B) {
    let n = A.length;
    let m = B.length;
    if (n > m)
        return Median(B, A); // Swapping to make A smaller

    let start = 0;
    let end = n;
    let realmidinmergedarray = Math.floor((n + m + 1) / 2);

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let leftAsize = mid;
        let leftBsize = realmidinmergedarray - mid;
        let leftA
            = (leftAsize > 0)
                ? A[leftAsize - 1]
                : Number.MIN_VALUE; // checking overflow of indices
        let leftB
            = (leftBsize > 0) ? B[leftBsize - 1] : INT_MIN;
        let rightA
            = (leftAsize < n) ? A[leftAsize] : INT_MAX;
        let rightB
            = (leftBsize < m) ? B[leftBsize] : INT_MAX;

        // if correct partition is done
        if (leftA <= rightB && leftB <= rightA) {
            if ((m + n) % 2 == 0)
                return Math.floor((Math.max(leftA, leftB)
                    + Math.min(rightA, rightB))
                    / 2.0);
            return Math.max(leftA, leftB);
        }
        else if (leftA > rightB) {
            end = mid - 1;
        }
        else
            start = mid + 1;
    }
    return 0.0;
}

// Driver code
let arr1 = [-5, 3, 6, 12, 15];
let arr2 = [-12, -10, -6, -3, 4, 10];
console.log("Median of the two arrays are");
console.log(Median(arr1, arr2))

// Time Complexity: O(min(log m, log n))
// Auxiliary Space: O(1)