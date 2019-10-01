const assert = require('assert');
const PaintCan = require('../paintCan.js');

describe('PaintCan', function() {
  let paintCan;
  beforeEach(function() {
    paintCan = new PaintCan(1)
  });
  it('should have a number of litres of paint', function() {
    const actual = paintCan.litres;
    assert.strictEqual(actual, 1);
  })
  it('should be able to check if it is empty', function () {
    const actual = paintCan.checkIfEmpty();
    assert.deepStrictEqual(actual, false);
  })
  it('should be able to empty itself of paint'), function() {
    const actual = paintCan.getEmpty();
    assert.deepStrictEqual(actual, PaintCan.litres);
  }
})
