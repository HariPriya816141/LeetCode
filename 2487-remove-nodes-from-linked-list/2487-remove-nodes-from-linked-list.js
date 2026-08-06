/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var removeNodes = function(head) {

    head = reverse(head);

    let maxValue = head.val;
    let current = head;

    while (current !== null && current.next !== null) {

        if (current.next.val < maxValue) {
            current.next = current.next.next;
        } else {
            current = current.next;
            maxValue = current.val;
        }
    }

    return reverse(head);
};

function reverse(head) {

    let prev = null;
    let current = head;

    while (current !== null) {

        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    return prev;
}