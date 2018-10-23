//1.2

/********************
******Hash Map*******
********************/

const createCharMap = (str) => {
    const charMap = {};
    for(let char of str.replace(/[^\w]/g, "").toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}

const checkPermutation = (strA, strB) => {
    const charMapA = createCharMap(strA); 
    const charMapB = createCharMap(strB); 

    if(Object.keys(charMapA).length !== Object.keys(charMapB).length) { 
        return false;
    }

    for(let char in charMapA) {
        if(charMapA[char] !== charMapB[char]) {
            return false;
        }
    }
    return true;
}


export default checkPermutation;

/********************
******Fancy Way******
********************/

// function checkPermutation(strA, strB) {
//     return cleanString(strA) === cleanString(strB);
// }

// function cleanString(str) {
//     return str.replace(/[^\w]/g).split("").sort().join("");
// }