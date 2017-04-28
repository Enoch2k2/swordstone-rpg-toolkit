class Game{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = 'auto';
    this.canvas.style.backgroundColor = "black";
    this.tileSize = 35;
  }
}

Game.prototype.size = function(h, w){
  this.canvas.width = w * this.tileSize;
  this.canvas.height = h * this.tileSize;
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
