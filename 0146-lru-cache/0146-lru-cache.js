/**
 * @param {number} capacity
 */

 class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}


var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);

    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */

 LRUCache.prototype.remove = function(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
};

LRUCache.prototype.insert = function(node) {
    node.next = this.head.next;
    node.prev = this.head;

    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1;

    let node = this.map.get(key);

    this.remove(node);
    this.insert(node);

    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        let existing = this.map.get(key);

        this.remove(existing);
        this.map.delete(key);
    }

    let node = new Node(key, value);

    this.insert(node);
    this.map.set(key, node);

    if (this.map.size > this.capacity) {
        let lru = this.tail.prev;

        this.remove(lru);
        this.map.delete(lru.key);
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */