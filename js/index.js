function initialize(){
  // Game(height, width) defaults to black background
  game = new Game();
  game.tileSize = 30;
  game.size(20, 35) // set by tiles, 1 tile = 35(by default, can be changed with game.tileSize('px')) px; @params h, w
  debugger;
  game.changeBackgroundColor('green');
  game.render();
}
