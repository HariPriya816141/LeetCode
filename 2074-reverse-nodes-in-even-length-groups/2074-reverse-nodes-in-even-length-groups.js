/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseEvenLengthGroups = function(head) {

    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;
    let groupSize = 1;

    while (prev.next !== null) {

        // Count actual nodes in this group
        let count = 0;
        let node = prev.next;

        while (node !== null && count < groupSize) {
            node = node.next;
            count++;
        }

        if (count % 2 === 0) {
            prev = reverseGroup(prev, count);
        } else {
            for (let i = 0; i < count; i++) {
                prev = prev.next;
            }
        }

        groupSize++;
    }

    return dummy.next;
};

function reverseGroup(prev, len) {

    let current = prev.next;

    for (let i = 0; i < len - 1; i++) {

        let next = current.next;

        current.next = next.next;

        next.next = prev.next;

        prev.next = next;
    }

    return current;
}