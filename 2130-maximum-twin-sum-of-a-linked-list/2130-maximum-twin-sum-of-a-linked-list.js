/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
       // Find middle
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse second half
    let prev = null;
    let current = slow;

    while (current !== null) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    // Compare twin sums
    let first = head;
    let second = prev;

    let maxSum = 0;

    while (second !== null) {
        maxSum = Math.max(maxSum, first.val + second.val);
        first = first.next;
        second = second.next;
    }

    return maxSum;
};