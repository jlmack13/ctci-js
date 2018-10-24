import { assert } from 'chai';
import oneAway from './index';

describe('oneAway', () => {
    it('returns true if a string is one character away from another string', () => {
        //setup
        const stringA = "pale";
        const stringB = "ple";
        const expectedResult = true;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns true is a string is one character away from another string', () => {
        //setup
        const stringA = "pales";
        const stringB = "pale";
        const expectedResult = true;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns true is a string is one character away from another string', () => {
        //setup
        const stringA = "pale";
        const stringB = "bale";
        const expectedResult = true;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns true is a string is one character away from another string', () => {
        //setup
        const stringA = "pale";
        const stringB = "ple";
        const expectedResult = true;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns true if a string is one character away from another string', () => {
        //setup
        const stringA = "pizza";
        const stringB = "izza";
        const expectedResult = true;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false if a string is not one character away from another string', () => {
        //setup
        const stringA = "pale";
        const stringB = "bake";
        const expectedResult = false;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false if input is "pythagoras" and "archimedes"', () => {
        //setup
        const stringA = "pythagoras";
        const stringB = "archimedes";
        const expectedResult = false;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns true for identical strings', () => {
        //setup
        const stringA = "pythagoras";
        const stringB = "pythagoras";
        const expectedResult = true;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false when input is "What always runs but never walks, often murmurs, never talks, has a bed but never sleeps, has a mouth but never eats?" and "A river"', () => {
        //setup
        const stringA = "What always runs but never walks, often murmurs, never talks, has a bed but never sleeps, has a mouth but never eats?";
        const stringB = "A river";
        const expectedResult = false;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });

    it('returns false when input is "This thing all things devours. Birds, bees, trees, flowers. Gnaws iron, bites steel. Grinds hard stones to meal. Slays king, ruins town. And beats high mountain down". and "Time"', () => {
        //setup
        const stringA = "This thing all things devours. Birds, bees, trees, flowers. Gnaws iron, bites steel. Grinds hard stones to meal. Slays king, ruins town. And beats high mountain down.";
        const stringB = "Time";
        const expectedResult = false;
        //exercise
        const result = oneAway(stringA, stringB)
        //verify
        assert.equal(result, expectedResult);
    });
    
});