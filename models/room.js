const Room = function (squareMetres, isPainted) {
  this.squareMetres = squareMetres;
  this.isPainted = isPainted;
}

Room.prototype.getPainted = function(){
  this.isPainted = true;
}

module.exports = Room;
