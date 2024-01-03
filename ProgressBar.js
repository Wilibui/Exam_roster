let bar_x;
let bar_y;
let max_w;
let bar_w;
let bar_h;

function progressBar(){
  bar_x = 0.25*w;
  bar_y = 0.25*h;
  
  max_w = w*7;
  bar_w = map(hour()+minute()/60, 0, 24, 0, max_w);
  bar_h = 0.4*h;
  
  stroke(255);
  strokeWeight(w/50);
  fill(255);
  rect(bar_x, bar_y, max_w, bar_h, r);
  fill(0);
  rect(bar_x, bar_y, bar_w, bar_h, r);
}
