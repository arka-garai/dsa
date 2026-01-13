var middleNode = function (head) {
  let slow = (fast = head);
  while (fast != null && fast.next != null) {
    slow = slow.next; //1 step forward
    fast = fast.next.next; //2 step forward
  }
  return slow;
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
console.log(middleNode(head));

