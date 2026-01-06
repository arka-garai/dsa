function fun(n) {
    //no base case
    console.log(n);
    fun(n-1);
}
fun(5);

//Infinite recursion leads to stack overflow


