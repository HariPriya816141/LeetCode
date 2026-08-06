var RandomizedSet = function() {

    this.arr = [];
    this.map = {};

};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {

    if (val in this.map)
        return false;

    this.arr.push(val);

    this.map[val] = this.arr.length - 1;

    return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {

    if (!(val in this.map))
        return false;

    let index = this.map[val];

    let last = this.arr[this.arr.length - 1];

    // Swap last element into removed element's place
    this.arr[index] = last;

    this.map[last] = index;

    // Remove last element
    this.arr.pop();

    delete this.map[val];

    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {

    let randomIndex =
        Math.floor(Math.random() * this.arr.length);

    return this.arr[randomIndex];
};