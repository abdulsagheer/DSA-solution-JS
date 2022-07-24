 function maxHist(R, C, row) {

        let result = [];
 
        let top_val;
 
        let max_area = 0;
 
        let area = 0;
 
        let i = 0;
        while (i < C) {
            if (result.length == 0
                || row[result[result.length - 1]] <= row[i]) {
                result.push(i++);
            }
 
            else {
                top_val = row[result[result.length - 1]];
                result.pop();
                area = top_val * i;
 
                if (result.length > 0) {
                    area = top_val * (i - result[result.length - 1] - 1);
                }
                max_area = Math.max(area, max_area);
            }
        }
 
        while (result.length > 0) {
            top_val = row[result[result.length - 1]];
            result.pop();
            area = top_val * i;
            if (result.length > 0) {
                area = top_val * (i - result[result.length - 1] - 1);
            }
 
            max_area = Math.max(area, max_area);
        }
        return max_area;
    }
 

    function maxRectangle(R, C, A)
    {
        let result = maxHist(R, C, A[0]);
 
        for (let i = 1; i < R; i++) {
            for (let j = 0; j < C; j++) {
 
                if (A[i][j] == 1) {
                    A[i][j] += A[i - 1][j];
                }
            }
 
            result = Math.max(result, maxHist(R, C, A[i]));
        }
 
        return result;
    }
    
    let R = 4;
    let C = 4;

      let A = [ [ 0, 1, 1, 0 ],
               [ 1, 1, 1, 1 ],
               [ 1, 1, 1, 1 ],
               [ 1, 1, 0, 0 ] ];
    console.log("Area of maximum rectangle is "
                  + maxRectangle(R, C, A));

// Time Complexity: O(R x C)
// Space Complexity: O(C)