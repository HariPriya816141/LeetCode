var MyHashMap = function() {

    this.hash = new Array(1000001).fill(-1);

};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {

    this.hash[key] = value;

};

/**
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {

    return this.hash[key];

};

/**
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {

    this.hash[key] = -1;

};