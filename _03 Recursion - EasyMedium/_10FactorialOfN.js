function fact(n) {
    if(n == 0){//base case
        return 1;
    }
    return n * fact(n - 1); //recursive case
}

//fact(n) = n * fact(n-1)

console.log(fact(5));
