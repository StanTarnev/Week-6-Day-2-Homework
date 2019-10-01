const assert = require('assert');
const Decorator = require('../decorator.js');

describe('Decorator', function(){
  let decorator;
  beforeEach(function(){
    decorator = new Decorator(0);
  });
  it('should start with an empty paint stock', function(){
    const actual = decorator.paintCanStock;
    assert.strictEqual(actual, 0);
  })
  it('should be able to add a can of paint to paint stock', function(){
    const actual = decorator.addPaintCanToStock();
    assert.deepStrictEqual(actual, Decorator.paintCanStock);
  })
  it('should be able to calculate total litres paint it has in stock', function(){
    decorator.addPaintCanToStock();
    decorator.addPaintCanToStock();
    decorator.addPaintCanToStock();
    const actual = decorator.totalPaintLitresInStock();
    assert.deepStrictEqual(actual, 3)
  })
  it('should be able to calculate whether is has enough paint to paint a room', function(){
    const actual = decorator.ifEnoughPaintForRoom();
    assert.deepStrictEqual(actual, false)
  })
  // it('should be able to paint room if has enough paint in stock', function(){
  //   const actual = decorator.paintRoom();
  //   assert.deepStrictEqual(actual, Room.isPainted);
  // })

})
