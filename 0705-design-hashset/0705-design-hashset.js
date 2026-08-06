var MyHashSet = function() {

    this.hash = new Array(1000001).fill(false);

};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {

    this.hash[key] = true;

};

/**
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {

    this.hash[key] = false;

};

/**
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {

    return this.hash[key];

};