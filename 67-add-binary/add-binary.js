/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
     let result = '';
    let carry = 0;

    // Start from the rightmost bits of the binary strings
    let i = a.length - 1, j = b.length - 1;

    while (i >= 0 || j >= 0 || carry > 0) {
        // Get the bits at the current positions (or 0 if already reached the beginning of a string)
        const bitA = i >= 0 ? parseInt(a[i]) : 0;
        const bitB = j >= 0 ? parseInt(b[j]) : 0;

        // Calculate the sum and carry for the current positions
        const sum = bitA + bitB + carry;
        carry = Math.floor(sum / 2);

        // Append the current bit to the result string
        result = (sum % 2) + result;

        // Move to the next positions
        i--;
        j--;
    }

    return result;
};