var fib = function (n) {
  if (n == 0 || n == 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

//tc = o(2^n)
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
