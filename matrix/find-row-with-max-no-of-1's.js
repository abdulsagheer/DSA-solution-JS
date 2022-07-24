// Naive Implementation
var R = 4 ;
var C  = 4 ;

// Function to find the index of first index 
// of 1 in a boolean array arr 
function first(arr , low , high) 
{ 
    if(high >= low) 
    { 
        // Get the middle index 
        var mid = low + parseInt((high - low)/2); 
    
        // Check if the element at middle index is first 1 
        if ( ( mid == 0 || arr[mid-1] == 0) && arr[mid] == 1) 
            return mid; 
    
        // If the element is 0, recur for right side 
        else if (arr[mid] == 0) 
            return first(arr, (mid + 1), high); 
        
        // If element is not first 1, recur for left side 
        else
            return first(arr, low, (mid -1)); 
    } 
    return -1; 
} 

// Function that returns index of row 
// with maximum number of 1s. 
function rowWithMax1s(mat) 
{ 

    // Initialize max values 
    var max_row_index = 0, max = -1; 

    // Traverse for each row and count number of 1s 
    // by finding the index of first 1 
    var i, index; 
    for (i = 0; i < R; i++) 
    { 
        index = first (mat[i], 0, C-1); 
        if (index != -1 && C-index > max) 
        { 
            max = C - index; 
            max_row_index = i; 
        } 
    } 
    return max_row_index; 
} 

    // Driver Code
        var mat = [[0, 0, 0, 1], 
                [0, 1, 1, 1], 
                [1, 1, 1, 1], 
                [0, 0, 0, 0]];
    console.log("Index of row with maximum 1s is " + rowWithMax1s(mat)); 

    
// Time Complexity:  O(m*n)
// Space Complexity:  O(1)

// Efficient Implementation
function rowWithMax1s(mat)
{

    // Initialize first row as row with max 1s
    let j, max_row_index = 0;
    j = C - 1;

    for (let i = 0; i < R; i++)
    {
    
        // Move left until a 0 is found
        let flag = false;
        
        // to check whether a row has more 1's than previous
        while (j >= 0 && mat[i][j] == 1)
        {
        
            j = j - 1; // Update the index of leftmost 1
            // seen so far
            flag = true;//present row has more 1's than previous
        }
        
        // if the present row has more 1's than previous
        if (flag) 
        {
            max_row_index = i; // Update max_row_index
        }
    }
    if (max_row_index == 0 && mat[0][C - 1] == 0)
        return -1;
    return max_row_index;
}

// Driver Code
mat = [[0, 0, 0, 1],
[0, 1, 1, 1],
[1, 1, 1, 1],
[0, 0, 0, 0]];

console.log("Index of row with maximum 1s is " + rowWithMax1s(mat));


// Time Complexity: O(m+n)
// Auxiliary Space:  O(1)




