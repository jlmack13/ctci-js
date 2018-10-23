import { assert } from 'chai';
import checkPermutation from './index';

describe('checkPermutation', () => {
    it('returns true if a string is a permutation of another string', () => {
        //setup
        const stringA = "abcde";
        const stringB = "bcdea"
        const expectedResult = true;
        //exercise
        const result = checkPermutation(stringA, stringB);
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false if a string is not a permutation of another string', () => {
        //setup
        const stringA = "apple";
        const stringB = "pear";
        const expectedResult = false;
        //exercise
        const result = checkPermutation(stringA, stringB);
        //verify
        assert.equal(result, expectedResult);
    });
});