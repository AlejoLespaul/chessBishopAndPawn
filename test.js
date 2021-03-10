const challengeFunction = require('./index.js')
const assert = require('assert')

describe('ChallengeTemplate', () => {

    /**
     * TEST DESCRIPTION
     */
    it('Test1: when bishop="A1" and pawn="C3" should return true', () => {

        let result = challengeFunction("A1", "C3")
        let expected = true

        assert.strictEqual(result,expected)
    })


    /**
     * TEST DESCRIPTION
     */
    it('Test2: when bishop="H1" and pawn="H3" should return false', () => {

        let result = challengeFunction("H1", "H3")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test3: when bishop="H4" and pawn="F2" should return true', () => {

        let result = challengeFunction("H4", "F2")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test4: when bishop="B2" and pawn="E5" should return true', () => {

        let result = challengeFunction("B2", "E5")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test5: when bishop="D8" and pawn="G8" should return false', () => {

        let result = challengeFunction("D8", "G8")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test6: when bishop="C6" and pawn="H2" should return false', () => {

        let result = challengeFunction("C6", "H2")
        let expected = false

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test7: when bishop="A1" and pawn="H8" should return true', () => {

        let result = challengeFunction("A1", "H8")
        let expected = true

        assert.strictEqual(result,expected)
    })

    /**
     * TEST DESCRIPTION
     */
    it('Test8: when bishop="A3" and pawn="H3" should return false', () => {

        let result = challengeFunction("A3", "H3")
        let expected = false

        assert.strictEqual(result,expected)
    })

})
