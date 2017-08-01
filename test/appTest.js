/* eslint-env mocha */
const assert = require('chai').assert;
const aritGeo = require('../app.js');

describe('aritGeo', () => {
  describe('check if input is arithmetic sequence', () => {
    it('should return Arithmetic', () => {
      assert.equal(aritGeo([1, 2, 3, 4, 5, 6]), 'Arithmetic');
    });
  });

  describe('check if input is geometric sequence', () => {
    it('should return Geometric', () => {
      assert.equal(aritGeo([1, 2, 4, 8, 16, 32]), 'Geometric');
    });
  });

  describe('check if input is an empty array', () => {
    it('should return zero', () => {
      assert.equal(aritGeo([]), 0);
    });
  });

  describe('check if input is a sequence', () => {
    it('should return -1', () => {
      assert.equal(aritGeo([1, 9, 3, 4, 5, 17]), -1);
    });
  });

  describe('check if input type is a string', () => {
    it('should return -1', () => {
      assert.equal(aritGeo('a sequence'), -1);
    });
  });

  describe('check if input type is a number', () => {
    it('should return -1', () => {
      assert.equal(aritGeo(1), -1);
    });
  });

  describe('check if input array contains constants with common differences', () => {
    it('should return -1', () => {
      assert.equal(aritGeo([1, 1, 1, 1, 1, 1, 1]), -1);
    });
  });

  describe('check if input is null', () => {
    it('should return -1', () => {
      assert.equal(aritGeo(null), -1);
    });
  });

  describe('check if no argument was supplied', () => {
    it('should return -1', () => {
      assert.equal(aritGeo(), -1);
    });
  });

  describe('check if array contains single element', () => {
    it('should return -1', () => {
      assert.equal(aritGeo([1]), -1);
    });
  });
});

