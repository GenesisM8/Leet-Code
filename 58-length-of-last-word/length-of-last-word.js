/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
     // Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Find the last space in the trimmed string
    let lastSpaceIndex = s.lastIndexOf(' ');

    // If there is no space, then the entire string is the last word
    if (lastSpaceIndex === -1) {
        return s.length;
    }

    // Return the length of the last word
    return s.length - lastSpaceIndex - 1;
};