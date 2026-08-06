/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
        let slow = head;
    let fast = head;

    // Phase 1: Detect cycle
    while (fast !== null && fast.next !== null) {

        slow = slow.next;
        fast = fast.next.next;

        if (slow === fast) {

            // Phase 2: Find cycle start
            let pointer = head;

            while (pointer !== slow) {
                pointer = pointer.next;
                slow = slow.next;
            }

            return pointer;
        }
    }

    return null;
};