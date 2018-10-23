import { assert } from 'chai';
import checkPalindromePermutation from './index';

describe('checkPalindromePermutation', () => {
    it('returns true if a string contains a permutation of a palindrome', () => {
        //setup
        const string = "tact coa";
        const expectedResult = true;
        //exercise
        const result = checkPalindromePermutation(string);
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns true if a string contains a permutation of a palindrome', () => {
        //setup
        const string = "bbaaccddtmmnnoo";
        const expectedResult = true;
        //exercise
        const result = checkPalindromePermutation(string);
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false if a string does not contain a permutation of a palindrome', () => {
        //setup
        const string = "not a palindrome";
        const expectedResult = false;
        //exercise
        const result = checkPalindromePermutation(string);
        //verify
        assert.equal(result, expectedResult);
    });
});