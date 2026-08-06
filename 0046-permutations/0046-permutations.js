/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
        let result = []

    let used = new Array(nums.length).fill(false)

    function backTrack(path){
        if (path.length === nums.length){
            result.push([...path])
            return
        }

        for(let i = 0; i < nums.length; i++){
             if (used[i]){
                continue
             }

             used[i] = true

             path.push(nums[i])

             backTrack(path)
            
             path.pop()

             used[i] = false
        }
    }

    backTrack([])

    return result
};