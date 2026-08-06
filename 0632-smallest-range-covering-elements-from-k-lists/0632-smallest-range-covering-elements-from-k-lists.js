/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function(nums) {
        class MinHeap {
        constructor() {
            this.heap = [];
        }

        push(node) {
            this.heap.push(node);
            this.bubbleUp();
        }

        bubbleUp() {
            let index = this.heap.length - 1;

            while (index > 0) {
                let parent = Math.floor((index - 1) / 2);

                if (this.heap[parent].value <= this.heap[index].value) break;

                [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

                index = parent;
            }
        }

        pop() {
            if (this.heap.length === 1) return this.heap.pop();

            let top = this.heap[0];
            this.heap[0] = this.heap.pop();
            this.bubbleDown();

            return top;
        }

        bubbleDown() {
            let index = 0;

            while (true) {

                let left = index * 2 + 1;
                let right = index * 2 + 2;

                let smallest = index;

                if (
                    left < this.heap.length &&
                    this.heap[left].value < this.heap[smallest].value
                ) {
                    smallest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right].value < this.heap[smallest].value
                ) {
                    smallest = right;
                }

                if (smallest === index) break;

                [this.heap[index], this.heap[smallest]] =
                [this.heap[smallest], this.heap[index]];

                index = smallest;
            }
        }

        size() {
            return this.heap.length;
        }
    }

    let heap = new MinHeap();
    let currentMax = -Infinity;

    // Put first element of every list
    for (let i = 0; i < nums.length; i++) {

        heap.push({
            value: nums[i][0],
            list: i,
            index: 0
        });

        currentMax = Math.max(currentMax, nums[i][0]);
    }

    let start = 0;
    let end = Infinity;

    while (heap.size() === nums.length) {

        let current = heap.pop();

        let currentMin = current.value;

        if (
            currentMax - currentMin < end - start ||
            (
                currentMax - currentMin === end - start &&
                currentMin < start
            )
        ) {
            start = currentMin;
            end = currentMax;
        }

        let nextIndex = current.index + 1;

        if (nextIndex < nums[current.list].length) {

            let nextValue = nums[current.list][nextIndex];

            heap.push({
                value: nextValue,
                list: current.list,
                index: nextIndex
            });

            currentMax = Math.max(currentMax, nextValue);
        }
    }

    return [start, end];
};