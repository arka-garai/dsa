/*hashtable approach   tc = o(n)   sc = o(n/2) = o(n)
let singleNumber = function(nums) {
    let n = nums.length;
    let hash = {};

    for(let i= 0; i < n; i++){
        if(!hash[nums[i]]){
            hash[nums[i]] = 1;
        }else{
            hash[nums[i]]++;
        }
    }

    for(let i=0; i < n; i++){
        if(hash[nums[i]] === 1){
            return nums[i];
        }
    }
};
*/

//xor approach   a xor a = 0     a xor 0 = a   tc = o(n)  sc = o(1)
let singleNumber = function(nums) {
    let n = nums.length;
    let xor = 0;
    for(let i = 0; i < n; i++){
        xor = xor ^ nums[i];
    }
    return xor;
};
let nums = [4,1,2,1,2];
console.log(singleNumber(nums));