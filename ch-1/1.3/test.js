import { assert } from 'chai';
import URLify from './index';

describe('URLify', () => {
    it('it returns a string with spaces replaced by %20', () => {
        //setup
        const string = "There are spaces here!";
        const expectedResult = "There%20are%20spaces%20here!";
        //exercise
        const result = URLify(string);
        //verify
        assert.equal(result, expectedResult);
    });

    it('it removes trailing whitespaces', () => {
        //setup
        const string = "Hello there      ";
        const expectedResult = "Hello%20there";
        //exercise
        const result = URLify(string);
        //verify
        assert.equal(result, expectedResult);
    });
});