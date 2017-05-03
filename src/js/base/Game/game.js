class Game{
  constructor(){
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'canvas';
    this.canvas.style.display = 'block';
    this.canvas.style.margin = 'auto';
    this.tileSize = 35;
  }
}

Game.prototype.size = function(h, w){
  this.canvas.width = w * this.tileSize;
  this.canvas.height = h * this.tileSize;
}
//
// Game.prototype.create2Dlayers = function(layer){
//   for(var i = 0; i < (this.canvas.height / this.tileSize); i++){
//     layer[i] = [];
//     for(var j = 0; j < (this.canvas.width / this.tileSize); j++){
//       layer[i][j] = 0;
//     }
//   }
// }

Game.prototype.fullScreen = function(){
  this.canvas.width = '100%';
  this.canvas.height = '100%';
}

Game.prototype.render = function () {
  document.body.appendChild(this.canvas);
}
