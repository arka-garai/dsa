function print(x) {
  if (x > n) {
    return;
  }
  console.log(x);
  print(++x);
}

n = 5
print(1);
