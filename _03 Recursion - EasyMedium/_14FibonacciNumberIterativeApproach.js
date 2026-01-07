let a = 0;
let b = 1;
let sum;
let n = 5;
//for nth fibonacci number
for (let i = 0; i < n; i++) {
    sum = a + b;
    a = b;
    b = sum;
}
//tc = o(n)
console.log(a);


//for fibonacci series upto nth position
// for (let i = 0; i < n; i++) {
//     console.log(a);
//     sum = a + b;
//     a = b;
//     b = sum;
// }

