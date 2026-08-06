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
var removeZeroSumSublists = function(head) {
    
    let dummy = new ListNode(0);
    dummy.next = head;

    let map = new Map();

    let prefix = 0;
    let current = dummy;

    // Pass 1
    while (current) {

        prefix += current.val;

        map.set(prefix, current);

        current = current.next;
    }

    prefix = 0;
    current = dummy;

    // Pass 2
    while (current) {

        prefix += current.val;

        current.next = map.get(prefix).next;

        current = current.next;
    }

    return dummy.next;
};