//https://leetcode.com/problems/linked-list-cycle/
/**
 * @param {ListNode} head
 * @return {boolean}
 */
//HashTable Approach
// Tc = sc = o(n)
var hasCycle = function (head) {
  let seenNodes = new Set();
  let curr = head;
  while (curr != null) {
    if (seenNodes.has(curr)) {
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
};

//Floyd's algo
// Tc  = o(n)  sc = o(1)
var hasCycle = function (head) {
  if (!head) return false;
  let slow = head;
  let fast = head.next;

  while (fast != null && fast.next != null) {
    if (fast == slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return false;
};