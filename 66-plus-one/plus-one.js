/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
        // Start from the least significant digit
    for (let i = digits.length - 1; i >= 0; i--) {
        // Increment the current digit
        digits[i]++;
        
        // Check for carry
        if (digits[i] <= 9) {
            // No carry, return the updated digits
            return digits;
        } else {
            // Carry, set the current digit to 0
            digits[i] = 0;
        }
    }
    
    // If we reach here, it means there is a carry in the most significant digit
    // Add a new digit with a value of 1 at the beginning
    digits.unshift(1);
    
    return digits;
};