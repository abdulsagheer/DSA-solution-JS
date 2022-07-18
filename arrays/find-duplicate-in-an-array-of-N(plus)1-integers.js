const findDuplicate = function(nums) {
    let s = 0, f = 0;
    while(true) {
        s = nums[s];
        f = nums[nums[f]];
        if(s == f) break;
    }
    s = 0;
    while(true) {
        s = nums[s];
        f = nums[f];
        if(s == f) break;
    }
    return s
};

console.log(findDuplicate([1, 2, 3, 4, 4, 5, 5, 6]))

// Time complexity - O(n2)


// Runtime: 94 ms, faster than 90.89% of JavaScript online submissions for Find the Duplicate Number.
// Memory Usage: 50 MB, less than 60.61% of JavaScript online submissions for Find the Duplicate Number.
const findDuplicates = nums => {

	// index will represent the number
	// mark number at current index visited by negating
	for (let i = 0; i < nums.length; i++) {
		const num = Math.abs(nums[i]); // make it positive to get correct index
		const idx = num - 1; // 1-index based: -1

		if (nums[idx] < 0) return num; // if negated, duplicate

		nums[idx] *= -1; // mark visited
	}
};

console.log(findDuplicates([1, 2, 3, 4, 4, 5, 5, 6]));

/**
 * *Time: O(N)
 * *Space: O(1)
 */