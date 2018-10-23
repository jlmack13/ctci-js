//Helper method to create a clean char map from a string with non-alphanumeric characters removed and all lower-case
const createCleanCharMap = (str) => {
    const charMap = {};
    for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

export default createCleanCharMap;