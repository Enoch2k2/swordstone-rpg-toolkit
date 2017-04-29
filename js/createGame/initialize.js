// here the user's should be able to initialize there game here with the starting scenes... Maybe we'll work our magic and get this to work for them.
var game, scene;
const animate = document.requestAnimationFrame;
function initialize(){
  game = new Game;
  game.tileSize = 20;
  game.size(20, 20)
  game.render();
  scene = new Scene(game.canvas, game.tileSize);
  draw();
}

function draw(){
  scene.render();
  animate(draw);
}
