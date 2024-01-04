let bar_x;
let bar_y;
let max_w;
let bar_w;
let bar_h;

function progressBar(){
  bar_x = 0.25*w;
  bar_y = 0.25*h;
  
  
  max_w = w*7;
  bar_h = 0.4*h;
  
  stroke(255);
  strokeWeight(w/50);
  fill(127, 0, 0);
  //rect(bar_x, bar_y, max_w, bar_h, r);
  
  
  //Hours
  max_w = w*7;
  bar_w = map(hour()+minute()/60, 0, 24, 0, max_w);
  
  fill(0);
  rect(bar_x, bar_y, bar_w, bar_h/3, r);
  
  //minutes
  max_w = w*7;
  bar_w = map(minute()+second()/60, 0, 60, 0, max_w);
 
  stroke(255);
  strokeWeight(w/50);
  fill(127);
  rect(bar_x, bar_y + bar_h/3, bar_w, bar_h/3, r);
  
  //seconden
  max_w = w*7;
  bar_w = map(second(), 0, 60, 0, max_w);
 
  stroke(255);
  strokeWeight(w/50);
  fill(200);
  rect(bar_x, bar_y + 2*bar_h/3, bar_w, bar_h/3, r);
  
  
}
