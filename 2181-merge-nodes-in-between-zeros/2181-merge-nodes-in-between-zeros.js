/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function(head) {
       let dummy = new ListNode(0);
    let tail = dummy;

    let current = head.next; // Skip the first zero
    let sum = 0;

    while (current !== null) {

        if (current.val === 0) {
            tail.next = new ListNode(sum);
            tail = tail.next;
            sum = 0;
        } else {
            sum += current.val;
        }

        current = current.next;
    }

    return dummy.next;
};