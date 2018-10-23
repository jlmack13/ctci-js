//1.1

const isUnique = (str) => {
    const charMap = {};
    const arr = str.split("");
    for (let char of arr) {
        if(charMap[char]) {
            return false;
        } else {
            charMap[char] = 1;
        }
    }
    return true;
}

export default isUnique;