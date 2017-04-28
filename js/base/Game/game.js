class Game{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = 'auto';
    this.canvas.style.backgroundColor = "black";
    this.tileSize = 35;
    this.layer1 = [];
    this.layer2 = [];
    this.layer3 = [];
  }
}

Game.prototype.size = function(h, w){
  this.canvas.width = w * this.tileSize;
  this.canvas.height = h * this.tileSize;
  this.create2Dlayers(this.layer1);
  this.create2Dlayers(this.layer2);
  this.create2Dlayers(this.layer3);
}

Game.prototype.create2Dlayers = function(layer){
  for(var i = 0; i < (this.canvas.height / this.tileSize); i++){
    layer[i] = [];
    for(var j = 0; j < (this.canvas.width / this.tileSize); j++){
      layer[i][j] = 0;
    }
  }
}

Game.prototype.changeBackgroundColor = function(color){
  this.canvas.style.backgroundColor = color;
}

Game.prototype.fullScreen = function(){
  this.canvas.width = '100%';
  this.canvas.height = '100%';
}

Game.prototype.render = function () {
  document.body.appendChild(this.canvas);
}
