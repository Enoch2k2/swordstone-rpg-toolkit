function initialize(){
  // Game(height, width) defaults to black background
  game = new Game();
  game.size(20, 35) // set by tiles, 1 tile = 35 px; @params h, w
  game.changeBackgroundColor('green');
  game.render();
}
