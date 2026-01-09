function countDigits(n){
    
    if(n == 0) {
        return 1;
    }

    if(n < 0) {
        // n = -n;
        n = Math.abs(n)
    }

    let count = 0;
    while(n){
        n = Math.floor(n / 10);
        count++;
    }
    return count;
}

console.log(countDigits(-1234567));
