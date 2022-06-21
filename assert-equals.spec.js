const assertEquals = require('./assert-equals')

describe('assertEquals', () => {
  describe('when expected and actual are the same string', () => {
    it('returns without throwing an error', () => {
      expect(() => assertEquals('abc', 'abc')).not.toThrow()
    })
  })

  describe('when expected and actual are different strings', () => {
    it('throws an error', () => {
      expect(() => assertEquals('abc','abcdefg')).toThrowError(/FAIL/);
    })
  })
})

describe('assertEquals', () => {
  describe('Check the data type of expected and actual', () => {
    it('returns without an error if both data types are a string', () => {
      expect(() => assertEquals(typeof 'abc', typeof 'abcdefg')).not.toThrow();
    })
    it('returns without an error if both data types are numbers', () => {
      expect(() => assertEquals(typeof 123, typeof 999)).not.toThrow();
    })
    it('returns without an error if both data types are arrays', () => {
      expect(() => assertEquals(typeof [1,2,3], typeof ['a','b','c'])).not.toThrow();
    })
    it('throws an error if the data types are not the same', () => {
      expect(() => assertEquals(typeof 123,typeof [])).toThrowError(/FAIL/);
    })
    it('returns without an error if the data types are objects', () => {
      expect(() => assertEquals(typeof {greeting: "Hello!"},typeof [1,2,3])).not.toThrow();
    })

  })
})

describe('assertEquals', () => {
  describe('Check for arrays', () => {
    it('returns without an error if both actual and expect is an array', () => {
      expect(() => assertEquals([1,2,3],[1,2,3])).not.toThrow();
    })
    it('throws an error if expect is array and actual is not an array', () => {
      expect(() => assertEquals([1,2,3],123)).toThrowError(/FAIL/);
    })
    it('throws an error if both are arrays but values do not match', () => {
      expect(() => assertEquals([1,2,3],['a','b','c'])).toThrowError(/FAIL/);
    })
  })
})
