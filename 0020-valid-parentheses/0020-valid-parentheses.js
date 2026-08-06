/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(str) {
        let map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    let stack = []

    for (let ch of str){
        if (ch in map){
            if (stack.pop() !== map[ch]) return false
        }else{
            stack.push(ch)
        }
    }
    return stack.length === 0
};