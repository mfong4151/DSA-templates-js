//Liao zhijuns template, advanced binary search template
//https://leetcode.com/discuss/general-discussion/786126/python-powerful-ultimate-binary-search-template-solved-many-problems

  // 1. No guessing on while l < r  while l <= r:
  // 2. No guessing on if r = mid - 1, l = mid +1
  // 3. No implicit condition for mid




const binarySearch = (array) => {
  const condition = (value) => {
    // Implementation of the condition to decide whether to go left or right
  };

  let l = 0;
  let r = array.length - 1;
  while (l < r) {
    const mid = l + Math.floor((r - l) / 2);
    if (condition(mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return l; // or l - 1 depending on the condition
};


