function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n ; i++) {
        let curr = arr[i];
        let prevIdx = i - 1;
        while(arr[prevIdx] > curr && prevIdx >= 0){
            arr[prevIdx + 1] = arr[prevIdx];
            prevIdx --;
        }
        arr[prevIdx + 1] = curr;
    }
    return arr;
}

let arr = [2, 0, 5, 4, 3, 8, 9];
console.log(insertionSort(arr));
