function kthSmallest(mat, n, k)
{
         
    let a = new Array(n*n)
    let v=0
         
    for(let i = 0; i < n; i++)
    {
        for(let j = 0; j < n; j++)
        {
            a[v] = mat[i][j];
            v++;
        }
    }
         
    a.sort();
    let result = a[k - 1];
    return result;
}
 
// driver program
         
let mat = [ [ 10, 20, 30, 40 ],
            [ 15, 25, 35, 45 ],
            [ 25, 29, 37, 48 ],
            [ 32, 33, 39, 50 ] ]
let res = kthSmallest(mat, 4, 7)
     
console.log("7th smallest element is "+ res,"</br>")
 

// Time Complexity: O(n2) 
// Auxiliary Space: O(n2)