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
var insertionSortList = function(head) {
    let dummy = new ListNode(0);

    let current = head;

    while (current !== null) {

        let nextNode = current.next;

        let prev = dummy;

        while (prev.next !== null && prev.next.val < current.val) {
            prev = prev.next;
        }

        current.next = prev.next;
        prev.next = current;

        current = nextNode;
    }

    return dummy.next;
};