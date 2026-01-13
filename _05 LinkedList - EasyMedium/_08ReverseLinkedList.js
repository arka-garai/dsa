var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
};

function Node(val) {
  this.val = val;
  this.next = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
let head = node1;

function printList(head) {
  let curr = head;
  let res = [];
  while (curr !== null) {
    res.push(curr.val);
    curr = curr.next;
  }
  console.log(res.join(" -> "));
}

console.log("Before reverse:");
printList(head);

head = reverseList(head);

console.log("After reverse:");
printList(head);
