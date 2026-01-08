function bubbleSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {//no. of passes => n-1
        let isSwapped = false;
        for(let j = 0; j < n - 1 - i; j++){ //no. of comparisons in ith pass => n-1-i
            if(arr[j] > arr[j+1]){
                //swap
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;

                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}

let arr = [2, 0, 5, 4, 3, 8, 9];
console.log(bubbleSort(arr));
