//https://leetcode.com/problems/palindrome-linked-list/

//approach 1
//convert LL to array then check if the array is palindrome or not
//tc = sc = o(n)

var isPalindrome = function (head) {
  let curr = head;
  let arr = [];
  while (curr) {
    arr.push(curr.val);
    curr = curr.next;
  }
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i] != arr[n - i - 1]) {
      return false;
    }
  }
  return true;
};

//approach 2
//tc = o(n)    sc = o(1)
var isPalindrome = function (head) {
  //find middle node
  let slow = head;
  let fast = head;
  while (fast != null && fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  let mid = slow; //middle element
  //reverse the 2nd half of LL
  let prev = null;
  let curr = mid;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  //check for palindrome
  let left = head;
  let right = prev;

  while (right) {
    if (left.val != right.val) {
      return false;
    }
    right = right.next;
    left = left.next;
  }
  return true;
};