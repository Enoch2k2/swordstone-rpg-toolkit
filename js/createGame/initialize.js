// here the user's should be able to initialize there game here with the starting scenes... Maybe we'll work our magic and get this to work for them.
const animate = window.requestAnimationFrame;
function initialize(){
  draw();
}

function draw(){
  currentScene.render();
  animate(draw);
}
