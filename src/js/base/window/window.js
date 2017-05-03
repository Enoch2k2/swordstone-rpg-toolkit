// todo, add base class for window structure - then branch out to possibly different types of windows?
// deconstruct the functionality of window - meaning a space used in the canvas.
// possibly give ability to set background color for the window
class Window {
  constructor(x,y,w,h){
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
  }
}

Window.prototype.backgroundColor = function(r,g,b,a=100){
  this.color = `rbga(${r}, ${g}, ${b}, ${a})`;
}
