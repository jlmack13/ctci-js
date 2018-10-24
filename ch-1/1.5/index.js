import createCharMap from '../../helpers/charMap';

const oneAway = (strA, strB) => {
    const difference = strA.length - strB.length;
    let longString = strA;
    let shortString = strB;
    if(difference > 1 || difference < -1) {
        return false;
    } else if (difference < 0) {
        longString = strB;
        shortString = strA;
    } 
    const charMap1 = createCharMap(longString);
    const charMap2 = createCharMap(shortString)

    let mismatch = 0;
    for(let char in charMap1) {
        if(charMap1[char] !== charMap2[char]) {
            mismatch++;
        }
    }
    return mismatch > 1 ? false : true;
}

export default oneAway;