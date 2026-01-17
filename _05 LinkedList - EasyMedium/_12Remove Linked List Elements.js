//https://leetcode.com/problems/remove-linked-list-elements/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    //creating and linking my sentinel node to the first node given
    let sentinelNode = new ListNode(0,head);
    let prev = sentinelNode;
    while(prev.next){
        if(prev.next.val === val){
            prev.next = prev.next.next;
        }else{
            prev = prev.next;
        }
    }
    return sentinelNode.next;

};