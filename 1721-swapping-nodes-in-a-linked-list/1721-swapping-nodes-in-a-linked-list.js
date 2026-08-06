/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
    
    let first = head;

    // Find kth node from the beginning
    for (let i = 1; i < k; i++) {
        first = first.next;
    }

    let fast = first;
    let second = head;

    // Find kth node from the end
    while (fast.next !== null) {
        fast = fast.next;
        second = second.next;
    }

    // Swap values
    let temp = first.val;
    first.val = second.val;
    second.val = temp;

    return head;
};