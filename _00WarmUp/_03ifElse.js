//create a function which accepts the age and tells whether a person is eligible to vote or not.

function eligibleToVote (age){
    if(age < 0) {
        console.log("Invalid Input");
    }
    else if(age < 18) {
        console.log("Not Eligible");
    }
    else {
        console.log("Eligible");
    }
}

eligibleToVote(20)
eligibleToVote(0)
eligibleToVote(-2)

//create a function to check if a number is even or odd

function checkEvenOdd(num) {
    let rem = num % 2; 
    
    if(rem == 0) {
        console.log("Even Number");
    }
    else {
        console.log("Odd Number");
    }       
}

checkEvenOdd(23)
checkEvenOdd(44)

