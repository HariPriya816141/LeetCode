/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val);
 *     this.next = (next === undefined ? null : next);
 * }
 */

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {

    if (lists.length === 0) return null;

    return divide(lists, 0, lists.length - 1);
};

function divide(lists, left, right) {

    if (left === right) return lists[left];

    let mid = Math.floor((left + right) / 2);

    let l1 = divide(lists, left, mid);
    let l2 = divide(lists, mid + 1, right);

    return merge(l1, l2);
}

function merge(l1, l2) {

    let dummy = new ListNode(0);
    let tail = dummy;

    while (l1 !== null && l2 !== null) {

        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }

        tail = tail.next;
    }

    if (l1 !== null) {
        tail.next = l1;
    } else {
        tail.next = l2;
    }

    return dummy.next;
}