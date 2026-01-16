//https://leetcode.com/problems/intersection-of-two-linked-lists/description/
//tc = o(n + m) sc = o(n)
let getIntersectionNode = function (headA, headB) {
    //put all nodes of LLB in set
    let curr = headB;
    let set = new Set();
    while (curr) {
        set.add(curr);
        curr = curr.next;
    }
    //check each node of LLA if it's present in the set
    curr = headA;
    while (curr) {
        if (set.has(curr)) {
            return curr;
        }
        curr = curr.next;
    }
    return null;
};