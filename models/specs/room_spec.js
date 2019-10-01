const assert = require('assert');
const Room = require('../room.js');

describe('Room', function(){
  let room;
  beforeEach(function () {
    room = new Room(30, false);
  });
  it('should have an area in square metres', function () {
    const actual = room.squareMetres;
    assert.strictEqual(actual, 30);
  })
  it('should start not painted', function(){
    const actual = room.isPainted;
    assert.strictEqual(actual, false);
  })
  it('should be able to be painted', function(){
    const actual = room.getPainted();
    assert.deepStrictEqual(actual, Room.isPainted);
  })
})
