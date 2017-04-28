class Scene{
  constructor(h, w){
    this.height = h;
    this.width = w;
    this.layer1 = [];
    this.layer2 = [];
    this.layer3 = [];
  }
}

Scene.prototype.create2Dlayers = function(layer){
  for(var i = 0; i < (this.canvas.height / this.tileSize); i++){
    layer[i] = [];
    for(var j = 0; j < (this.canvas.width / this.tileSize); j++){
      layer[i][j] = 0;
    }
  }
}

Scene.prototype.render = function(){
  
}
