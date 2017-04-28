var path = './js/';
var basePath = path + '/base/';
var createPath = path + '/createGame/';

function createSource(path){
  var script = document.createElement('script');
  script.src = path;
  document.body.appendChild(script);
}

createSource(basePath+'Game/game.js');
createSource(basePath+'baseMenu/baseMenu.js');
createSource(basePath+'render/render.js');
createSource(basePath+'scene/scene.js');
createSource(basePath+'window/window.js');
createSource(createPath+'GameWindow/game.js');
createSource(createPath+'scenes/scenes.js');
createSource(createPath+'initialize.js');
