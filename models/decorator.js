const Decorator = function (paintCanStock) {
  this.paintCanStock = paintCanStock;
}

Decorator.prototype.addPaintCanToStock = function(){
  this.paintCanStock += 1;
}

Decorator.prototype.totalPaintLitresInStock = function(){
  this.paintCanStock * paintCan.litres;
}

Decorator.prototype.ifEnoughPaintForRoom = function(){
    if this.totalPaintLitresInStock() >= room.squareMetres {
    return true;
  } else {
    return false;
  }
}

module.exports = Decorator;
