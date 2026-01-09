function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === target){
            return i;
        }
    }
    return -1;
}

let arr = [2,0,5,4,3,8,9];
console.log(linearSearch(arr,9));
console.log(linearSearch(arr,90));
