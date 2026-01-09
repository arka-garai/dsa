var reverse = function (x) {
  let rev = 0;
  let sign = x < 0 ? -1 : 1;
  x = Math.abs(x);
  while (x > 0) {
    rem = x % 10;
    rev = rev * 10 + rem;
    x = Math.floor(x / 10);
  }
  rev *= sign;
  let limit = Math.pow(2, 31);
  return rev < -limit || rev > limit - 1 ? 0 : rev;
};

console.log(reverse(-123));
