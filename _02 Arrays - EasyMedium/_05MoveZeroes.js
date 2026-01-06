let moveZeroes = function(nums) {
    let x = 0;
    let n = nums.length;
    for(let i = 0; i < n; i++){
        if(nums[i] !== 0){
            nums[x++] = nums[i];
        }
    }
    //change all remaining elements to zero
    while(x < n){
        nums[x++] = 0;
    }
};
let nums = [0,1,0,3,12];
moveZeroes(nums);
console.log(nums)