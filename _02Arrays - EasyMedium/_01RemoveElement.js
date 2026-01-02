var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    //shift the element to left only if it's not equal to val
    if (nums[i] != val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};


let nums = [3, 2, 2, 3];
// nums = [0, 1, 2, 2, 3, 0, 4, 2];
console.log(removeElement(nums,2));
console.log(nums);

