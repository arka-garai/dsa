let mergeSort = function (nums) {
  //base case
  if (nums.length <= 1) {
    //my array contains one element or zero element, so it is already sorted so return it
    return nums;
  }
  // Divide: split the array into two halves
  let mid = Math.floor(nums.length / 2);

  // Conquer: recursively sort both halves
  let left = mergeSort(nums.slice(0, mid));
  let right = mergeSort(nums.slice(mid));

  // Combine: merge the sorted halves
  return merge(left, right);
};

function merge(left, right) {
  let i = (j = 0);
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }

  return [...res, ...left.slice(i), ...right.slice(j)];
}

let nums = [5, 1, 1, 2, 0, 0];
console.log(mergeSort(nums));
