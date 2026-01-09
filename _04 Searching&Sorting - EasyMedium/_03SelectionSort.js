function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if(arr[j] < arr[minIdx]){
                minIdx = j;
            }
        }
        if(minIdx != i){
            let temp = arr[minIdx];
            arr[minIdx] = arr[i];
            arr[i] = temp;
        }
    }
    return arr;
}

let arr = [2, 0, 5, 4, 3, 8, 9];
console.log(selectionSort(arr));