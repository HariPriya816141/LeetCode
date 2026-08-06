/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */
var copyRandomList = function(head) {
       if (head === null) {
        return null;
    }

    let map = new Map();

    let current = head;

    // Pass 1: Create copied nodes
    while (current !== null) {
        map.set(current, new _Node(current.val));
        current = current.next;
    }

    current = head;

    // Pass 2: Connect next and random pointers
    while (current !== null) {

        let copy = map.get(current);

        copy.next = map.get(current.next) || null;
        copy.random = map.get(current.random) || null;

        current = current.next;
    }

    return map.get(head);
};