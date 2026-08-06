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
var reverseKGroup = function(head, k) {
     let dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;

    while (true) {

        // Find kth node
        let kth = groupPrev;

        for (let i = 0; i < k && kth !== null; i++) {
            kth = kth.next;
        }

        if (kth === null) {
            break;
        }

        let groupNext = kth.next;

        // Reverse group
        let prev = groupNext;
        let current = groupPrev.next;

        while (current !== groupNext) {

            let next = current.next;

            current.next = prev;

            prev = current;

            current = next;
        }

        // Reconnect
        let temp = groupPrev.next;

        groupPrev.next = kth;

        groupPrev = temp;
    }

    return dummy.next;
};