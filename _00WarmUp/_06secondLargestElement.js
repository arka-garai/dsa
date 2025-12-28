function findSecondLargest(arr) {

  if(arr.length < 2){ 
    // return null;
    return "Array should have atleast 2 elements"
  }  

  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    }else if(arr[i] > secondLargest && arr[i] != firstLargest){
      // arr[i] != firstLargest (handles logic if array has duplicate elements)
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [4, 3, -10, -13, -56, 90, 90, 10];
console.log(`The second largest number : ${findSecondLargest(arr)}`);

