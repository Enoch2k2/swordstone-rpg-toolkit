class Scene{
  constructor(canvas, tileSize){
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.height = canvas.height;
    this.width = canvas.width;
    this.layer1 = [];
    this.layer2 = [];
    this.layer3 = [];
    this.backgroundColor = 'black';
    this.tileSize = tileSize;
  }
}

Scene.prototype.create2DLayers = function(layer){
  for(var i = 0; i < (this.height / this.tileSize); i++){
    layer[i] = [];
    for(var j = 0; j < (this.width / this.tileSize); j++){
      layer[i][j] = 0;
    }
  }
}

Scene.prototype.update = function(){
  this.create2DLayers(this.layer1);
  this.create2DLayers(this.layer2);
  this.create2DLayers(this.layer3);
}

Scene.prototype.render = function(){
  this.ctx.fillStyle = this.backgroundColor;
  this.ctx.fillRect(0, 0, this.width, this.height);
}
