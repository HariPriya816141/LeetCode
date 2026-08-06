/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
        let prevA = list1;

    for (let i = 0; i < a - 1; i++) {
        prevA = prevA.next;
    }

    let afterB = prevA;

    for (let i = 0; i < b - a + 2; i++) {
        afterB = afterB.next;
    }

    prevA.next = list2;

    while (list2.next !== null) {
        list2 = list2.next;
    }

    list2.next = afterB;

    return list1;
};