//Helper method to create a char map of all characters in a string, case-sensitive
const createCharMap = (str) => {
    const charMap = {};
    for(let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

export default createCharMap;