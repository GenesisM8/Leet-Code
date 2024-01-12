/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
       // Create an empty object to store numbers and their indices
    const numIndices = {};

    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        // Calculate the complement (the number needed to reach the target)
        const complement = target - nums[i];

        // Check if the complement exists in numIndices
        if (complement in numIndices) {
            // Return the indices of the two numbers that add up to the target
            return [numIndices[complement], i];
        }

        // If the complement doesn't exist, store the current number and its index
        numIndices[nums[i]] = i;
    }

    // Return an empty array if no solution is found
    return [];
};