import { assert } from 'chai';
import isUnique from './index';

describe('isUnique', () => {
    it('returns true if a string has all unique characters', () => {
        //setup
        const string = "abcde";
        const expectedResult = true;
        //exercise
        const result = isUnique(string);
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false if a string has repeated characters', () => {
        //setup
        const string = "apple";
        const expectedResult = false;
        //exercise
        const result = isUnique(string);
        //verify
        assert.equal(result, expectedResult);
    });
});