import createCleanCharMap from '../../helpers/cleanCharMap';

const checkPalindromePermutation = (str) => {
    let evens = 0;
    let odds = 0;
    //create character map
    const charMap = createCleanCharMap(str);
    //count how many characters have an even count and how many have an odd count
    for(let char in charMap) {
        if(charMap[char] % 2 === 0) {
            evens++;
        } else {
            if(odds > 1) {
                return false;
            } else {
                odds++;
            }
        }
    }
    return true;
}

export default checkPalindromePermutation;