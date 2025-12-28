// Write a function that searches for an element in an array and returns the index,
// if the element is not present then just return -1

let arr = [4, 3, -10, -13, -56, 90];

function searchElement (arr,e){
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == e){
            return i;
        }
    }
    return -1;
}

console.log(searchElement(arr,90));

// Write a function that returns the number of negative numbers in an array

function countNegative(arr) {
    let negativeCounter = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        negativeCounter++;
      }
    }
    return negativeCounter;
}
console.log(`The number of negative numbers : ${countNegative(arr)}`);

// Write a function that returns the largest number in an array

function findLargest(arr) {
    let largest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        largest = arr[i];
      }
    }
    return largest;
}

console.log(`The largest number : ${findLargest(arr)}`);

// Write a function that returns the smallest number in an array

function findSmallest(arr) {
  let smallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  return smallest;
}

console.log(`The smallest number : ${findSmallest(arr)}`);


