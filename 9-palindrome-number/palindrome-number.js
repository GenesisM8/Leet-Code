/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    // Convert the integer to a string
    var strX = x.toString();
    
    // Compare characters from left to right and right to left
    for (var i = 0; i < strX.length / 2; i++) {
        if (strX[i] !== strX[strX.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
};
