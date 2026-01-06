/* 
function sum(n) {
    isOdd = arr[n] % 2 === 1; 
    if (n === 0) {
        if(isOdd) return arr[0]
        else return 0;
    }
    if(isOdd) return arr[n] + sum(n-1);
    else return 0 + sum(n-1);
}
 */

//using ternary
function sum(n) {
    let isOdd = arr[n] % 2 === 1;

    if (n === 0) {
        return isOdd ? arr[0] : 0;
    }

    return (isOdd ? arr[n] : 0) + sum(n - 1);
}

let arr = [5, 3, 2, 0, 1];
console.log(sum(arr.length - 1)); // 9
