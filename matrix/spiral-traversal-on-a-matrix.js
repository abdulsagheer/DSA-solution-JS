// Naive Implementation
function spiralOrder(matrix)
{
    let ans = [];
 
        if (matrix.length == 0)
            return ans;
 
        let R = matrix.length, C = matrix[0].length;
        let seen = new Array(R);
        for(let i=0;i<R;i++)
        {
            seen[i]=new Array(C);
            for(let j=0;j<C;j++)
            {
                seen[i][j]=false;
            }
        }
        
        let dr = [ 0, 1, 0, -1 ];
        let dc = [ 1, 0, -1, 0 ];
        let r = 0, c = 0, di = 0;
 
        // Iterate from 0 to R * C - 1
        for (let i = 0; i < R * C; i++) {
            ans.push(matrix[r][c]);
            seen[r][c] = true;
            let cr = r + dr[di];
            let cc = c + dc[di];
 
            if (0 <= cr && cr < R && 0 <= cc && cc < C
                && !seen[cr][cc]) {
                r = cr;
                c = cc;
            }
            else {
                di = (di + 1) % 4;
                r += dr[di];
                c += dc[di];
            }
        }
        return ans;
}

// Driver Code
let a=[[ 1, 2, 3, 4 ],[ 5, 6, 7, 8 ],
[ 9, 10, 11, 12 ],[ 13, 14, 15, 16 ]];
console.log(spiralOrder(a));



// Time Complexity: O(N)
// Auxiliary Space: O(N)

// Efficient Implementation

function print(arr, i, j, m, n) {

    // If i or j lies outside the matrix
    if (i >= m || j >= n) return;

    // Print First Row
    for (let p = j; p < n; p++) {
        console.log(arr[i][p] + ' ')
    }

    // Print Last Column
    for (let p = i + 1; p < m; p++) {
        console.log(arr[p][n - 1] + ' ')
    }

    // Print Last Row, if Last and
    // First Row are not same
    if ((m - 1) != i) {
        for (let p = n - 2; p >= j; p--) {
            console.log(arr[m - 1][p] + ' ');
        }
    }

    // Print First Column, if Last and
    // First Column are not same    
    if ((n - 1) != j) {
        for (let p = m - 2; p > i; p--) {
            console.log(arr[p][j] + ' ');
        }
    }
    print(arr, i + 1, j + 1, m - 1, n - 1)
}

// function call
let arr = [ [1, 2, 3, 4],
            [5, 6, 7, 8],
            [9, 10, 11, 12],
            [13, 14, 15, 16]
           ];
let r = arr.length;
let c = arr[0].length;

print(arr, 0, 0, r, c);



// Time Complexity: O(m*n)
// Auxiliary Space: O(1)
