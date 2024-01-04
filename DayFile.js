function setupDays(){
    
  for(let i = 0; i < 7; i++){
    x = ((i%7)+0.25)*w;
    y = 1.25*h;
    days[i] = new Day(12, 25+i, weekdays[i], x, y, i);
  }
  
  for(let i = 0; i < 31; i++){
    x = ((i%7)+0.25)*w;
    y = (floor(i/7)+2.25)*h;
    days[i+7] = new Day(1, 1+i, weekdays[0], x, y, i+7);
  }
    
  days[6 + 13].exam = "Warmte en Stroming";
  days[6 + 15].exam = "Ingenieur en duur";
  days[6 + 20].exam = "Wisselstroomnetten";
  days[6 + 24].exam = "Wiskunde";
  days[6 + 27].exam = "Data engeneering";
  days[6 + 31].exam = "Besturingssystemen";
  
  days[0].rest = "KERST";
  days[6].rest = "NEW Y";
  days[7].rest = "NEW Y";
  
  days[1].plan = "WIS";
  days[2].plan = "WIS";
  for(let i = 3; i <= 5; i++){
    days[i].plan = "WSN";
  }
  days[6 + 2].plan = "WIS";
  days[6 + 3].plan = "I&D";
  for(let i = 4; i <= 7; i++){
    days[6 + i].plan = "B/D";
  }
  for(let i = 8; i <= 12; i++){
    days[6 + i].plan = "W&S";
  }
  days[6 + 14].plan = "I&D";
  days[6 + 16].plan = "WIS";
  for(let i = 17; i <= 19; i++){
    days[6 + i].plan = "WSN";
  }
  for(let i = 21; i <= 23; i++){
    days[6 + i].plan = "WIS";
  }
  days[6 + 25].plan = "DAT";
  days[6 + 26].plan = "DAT";
  for(let i = 28; i <= 30; i++){
    days[6 + i].plan = "BES";
  }
  
  
  
}

function showWeekDays(){
  for(let i = 0; i < 7; i++){
    x = ((i%7)+0.25)*w;
    y = 0.75*h;
    fill(0);
    stroke(255);
    strokeWeight(w/50);
    rect(this.x, this.y, w, 0.4*h, r);
    
    x = ((i%7)+0.75)*w;
    y = h;
    
    if(c){
      fill(255, 127, 0);
    }else{
      fill(255);
    }
    noStroke();
    textSize(w/8);
    text(weekdays[i], x, y);
  }
}

function showDays(){
  for(let i = 0; i < 38; i++){
    days[i].show(); 
  }
  
  for(let i = 0; i < 38; i++){
    days[i].showLine();
    days[i].showText();
  }
}

class Day{
  constructor(month, day, weekday, x, y, i){
    this.month = month;
    this.day = day;
    this.weekday = weekday;
    this.x = x;
    this.y = y;
    this.i = i;
    this.exam = "";
    this.plan = "";
    this.rest = "";
  }
  
  showLine(){
    stroke(255); 
    if(this.i == current_i){
      this.dx = map(hour() + minute()/60, 0, 24, 0, w);
      line(this.x + this.dx, this.y, this.x + this.dx, this.y + h);
    }
  }
   
  show(){ 
    if(c){
      if(this.i < current_i){
        fill(0, 127, 0);
      }else if(this.i == current_i){
        fill(0, 0, 127);
      }else{
        fill(0);
      }
    }else{
      if(this.i < current_i){
        fill(75);
      }else if(this.i == current_i){
        fill(127);
      }else{
        fill(0);
      }
    }
    
    stroke(255);
    strokeWeight(w/50);
    rect(this.x, this.y, w, h, r);  
  }
  
  showText(){   
    if(c){
      fill(255, 0, 0);
    }else{
      fill(255);
    }
    
    noStroke();
    textSize(w/10);
    text(this.exam, this.x + w/2, this.y + 0.8*h);
    
    if(c){
      fill(0, 255, 255);
    }else{
      fill(127);
      if(this.i == current_i){
        fill(255);
      }
    }
    
    noStroke();
    textSize(w/7.5);
    text(this.plan, this.x + w/2, this.y + 0.8*h);
    
    if(c){
      fill(255, 255, 0);
    }else{
      fill(127);
      if(this.i == current_i){
        fill(255);
      }
    }
    
    noStroke();
    textSize(w/7.5);
    text(this.rest, this.x + w/2, this.y + 0.8*h);
    
    fill(255);
    textSize(w/5);
    text(this.day + "/" + this.month, this.x + w/2, this.y + 0.4*h);
  }
}
