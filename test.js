// test/test.js

const chai = require('chai');
const addNumbers = require('../app');

const expect = chai.expect;

describe('addNumbers function', () => {
  it('should add two numbers correctly', () => {
    const result = addNumbers(2, 3);
    expect(result).to.equal(5);
  });

  it('should handle negative numbers', () => {
    const result = addNumbers(-2, 3);
    expect(result).to.equal(1);
  });

  it('should handle zero', () => {
    const result = addNumbers(0, 5);
    expect(result).to.equal(5);
  });
});
