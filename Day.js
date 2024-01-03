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
  
  for(let i = 7; i < 38; i++){
    for(let j = 0; j < 6; j++){
      if(days[i].day == exam_days[j]){
        days[i].exam = exams[j];
      }
    }
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
    noStroke();
    fill(255, 127, 0);
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
  }
  
  showLine(){
    stroke(127);
    if(this.i == current_i){
      this.dx = map(hour() + minute()/60, 0, 24, 0, w);
      line(this.x + this.dx, this.y, this.x + this.dx, this.y + h);
    }
  }
   
  show(){ 
    stroke(255);
    strokeWeight(w/50);
    if(this.i < current_i){
      fill(0, 100, 0);
    }else if(this.i == current_i){
      fill(0, 0, 100);
    }else{
      fill(0);
    }
    rect(this.x, this.y, w, h, r);  
  }
  
  showText(){
    noStroke();
    fill(255, 0, 0);
    textSize(w/10);
    text(this.exam, this.x + w/2, this.y + 0.8*h);
    fill(255);
    textSize(w/5);
    text(this.day + "/" + this.month, this.x + w/2, this.y + 0.4*h);
  }
}
