/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {number}
 */
var pathSum = function(root, targetSum) {
      let map = new Map();
    map.set(0, 1);

    let count = 0;

    function dfs(node, currentSum) {

        if (node === null) {
            return;
        }

        currentSum += node.val;

        if (map.has(currentSum - targetSum)) {
            count += map.get(currentSum - targetSum);
        }

        map.set(currentSum, (map.get(currentSum) || 0) + 1);

        dfs(node.left, currentSum);
        dfs(node.right, currentSum);

        map.set(currentSum, map.get(currentSum) - 1);
    }

    dfs(root, 0);

    return count;
};