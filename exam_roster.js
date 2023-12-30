let weekdays = ["MA", "DI", "WOE", "DO", "VR", "ZA", "ZO"];
let days = [];
let current_i;
let exams = ["Warmte en Stroming", "Ingenieur en duur", "Wisselstroomnetten", "Wiskunde", "Data engeneering", "Besturingssystemen"];
let exam_days = [13, 15, 20, 24, 27, 31];
let w;
let h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
  w = width/8;
  h = height/7;
  
  for(let i = 0; i < 7; i++){
    x = ((i%7)+0.5)*w;
    y = 0.5*h;
    days[i] = new Day(12, 25+i, weekdays[i], x, y, i);
  }
  
  for(let i = 0; i < 31; i++){
    x = ((i%7)+0.5)*w;
    y = (floor(i/7)+1.5)*h;
    days[i+7] = new Day(1, 1+i, weekdays[0], x, y, i+7);
  }
  
  for(let i = 7; i < 38; i++){
    for(let j = 0; j < 6; j++){
      
      if(days[i].day == exam_days[j]){
        print(days[i].day + "   " + exam_days[j] + "  " + exams[j]);
        days[i].exam = exams[j]
      }
    }
  }
}


function draw() {
  translate(0, 0.35*h);
  background(127, 0, 0);
  
  
  if(month() == 12){ 
    current_i = day() - 25;
  }else{
    current_i = day() + 7;
  }
  
  for(let i = 0; i < 7; i++){
    x = ((i%7)+0.5)*w;
    y = 0.0*h;
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(this.x, this.y, w, 0.4*h, 20);
    
    x = ((i%7)+1)*w;
    y = 0.3*h;
    
    noStroke();
    fill(127, 127, 0);
    textSize(w/7);
    text(weekdays[i], x, y);
    
  }
  
  
  for(let i = 0; i < 38; i++){
    
    days[i].show();
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
  
  
  show(){
    
    
    if(this.i < current_i){
      fill(0, 127, 0);
    }else if(this.i == current_i){
      fill(0, 0, 127);
    }else{
      fill(0);
    }
    stroke(255);
    strokeWeight(5);
    rect(this.x, this.y, w, h, 20);
    
    
    noStroke();
    fill(255, 0, 0);
    textSize(w/10);
    text(this.exam, this.x + w/2, this.y + 0.8*h);
    fill(255);
    textSize(w/5);
    text(this.day + "/" + this.month, this.x + w/2, this.y + 0.4*h);
  }
  
}
