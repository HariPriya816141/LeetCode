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
var rotateRight = function(head, k) {
      if (head === null || head.next === null || k === 0) {
        return head;
    }

    let length = 1;
    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    k = k % length;

    if (k === 0) {
        return head;
    }

    tail.next = head;

    let steps = length - k - 1;
    let newTail = head;

    while (steps > 0) {
        newTail = newTail.next;
        steps--;
    }

    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
};