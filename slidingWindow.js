const slidingWindowTemplate = (arr) => {
  let res = 0; // Initialize to zero or some other base case
  let l = 0;
  let container = new Set();

  for (let r = 0; r < arr.length; r++) {
    container.add(arr[r]);

    while (/* condition to shrink the window */) {
      container.delete(arr[l]);
      l += 1;
    }

    res = /* update the current window value */;
  }

  return res;
};
