class Node {
    constructor(count) {
        this.count = count;
        this.keys = new Set();
        this.prev = null;
        this.next = null;
    }
}

var AllOne = function () {
    this.head = new Node(0);
    this.tail = new Node(0);

    this.head.next = this.tail;
    this.tail.prev = this.head;

    this.keyToNode = new Map();
};

AllOne.prototype.insertAfter = function (node, newNode) {
    newNode.next = node.next;
    newNode.prev = node;
    node.next.prev = newNode;
    node.next = newNode;
};

AllOne.prototype.removeNode = function (node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

AllOne.prototype.inc = function (key) {

    if (!this.keyToNode.has(key)) {

        let first = this.head.next;

        if (first !== this.tail && first.count === 1) {
            first.keys.add(key);
            this.keyToNode.set(key, first);
        } else {
            let node = new Node(1);
            node.keys.add(key);
            this.insertAfter(this.head, node);
            this.keyToNode.set(key, node);
        }

        return;
    }

    let cur = this.keyToNode.get(key);
    let next = cur.next;

    cur.keys.delete(key);

    if (next !== this.tail && next.count === cur.count + 1) {
        next.keys.add(key);
        this.keyToNode.set(key, next);
    } else {
        let node = new Node(cur.count + 1);
        node.keys.add(key);
        this.insertAfter(cur, node);
        this.keyToNode.set(key, node);
    }

    if (cur.keys.size === 0)
        this.removeNode(cur);
};

AllOne.prototype.dec = function (key) {

    let cur = this.keyToNode.get(key);

    cur.keys.delete(key);

    if (cur.count === 1) {

        this.keyToNode.delete(key);

    } else {

        let prev = cur.prev;

        if (prev !== this.head && prev.count === cur.count - 1) {

            prev.keys.add(key);
            this.keyToNode.set(key, prev);

        } else {

            let node = new Node(cur.count - 1);
            node.keys.add(key);

            this.insertAfter(prev, node);

            this.keyToNode.set(key, node);
        }
    }

    if (cur.keys.size === 0)
        this.removeNode(cur);
};

AllOne.prototype.getMaxKey = function () {

    if (this.tail.prev === this.head)
        return "";

    return this.tail.prev.keys.values().next().value;
};

AllOne.prototype.getMinKey = function () {

    if (this.head.next === this.tail)
        return "";

    return this.head.next.keys.values().next().value;
};