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
var deleteDuplicates = function(head) {
    
    let dummy = new ListNode(0);
    dummy.next = head;

    let prev = dummy;

    while (prev.next !== null && prev.next.next !== null) {

        if (prev.next.val === prev.next.next.val) {

            let duplicate = prev.next.val;

            while (prev.next !== null && prev.next.val === duplicate) {
                prev.next = prev.next.next;
            }

        } else {
            prev = prev.next;
        }
    }

    return dummy.next;
};