// here we will create our scenes and return them as an array. The Scene object should have a flag as to if it's the starting scene based on a player_start position.
var currentScene = new Scene(game.canvas, game.tileSize);
setTimeout(function () {
  currentScene.backgroundColor = 'red';
}, 5000); // since the draw function in the initialize constantly refreshes the canvas; we are able to just alter this file without worrying about explicitally rendering

// also if we create a new scene and override what the variable currentScene is set to, the draw will automatically change with the new render of that instance.
