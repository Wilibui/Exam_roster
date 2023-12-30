let weekdays = ["MAANDAG", "DINSDAG", "WOENSDAG", "DONDERDAG", "VRIJDAG", "ZATERDAG", "ZONDAG"];
let exams = ["Warmte en Stroming", "Ingenieur en duur", "Wisselstroomnetten", "Wiskunde", "Data engeneering", "Besturingssystemen"];
let exam_days = [13, 15, 20, 24, 27, 31];

let days = [];
let numbers = [];
let current_i;

let w;
let h;
let r;
let u;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
  w = width/10;
  h = height/7;
  u = width/40; 
  r = 0;
  
  for(let i = 0; i < 7; i++){
    x = ((i%7)+0.25)*w;
    y = 0.5*h;
    days[i] = new Day(12, 25+i, weekdays[i], x, y, i);
  }
  
  for(let i = 0; i < 31; i++){
    x = ((i%7)+0.25)*w;
    y = (floor(i/7)+1.5)*h;
    days[i+7] = new Day(1, 1+i, weekdays[0], x, y, i+7);
  }
  
  for(let i = 7; i < 38; i++){
    for(let j = 0; j < 6; j++){
      if(days[i].day == exam_days[j]){
        days[i].exam = exams[j]
      }
    }
  }
  
  numbers[0] = new Numbers(1.5*u + 7.2*w, 0, u);
  numbers[1] = new Numbers(4*u + 7.2*w, 0, u);
  numbers[2] = new Numbers(7*u + 7.2*w, 0, u);
  numbers[3] = new Numbers(9.5*u + 7.2*w, 0, u);
}


function draw() {
  translate(0, 0.3*h);
  background(127, 0, 0);
  
  if(month() == 12){ 
    current_i = day() - 25;
  }else{
    current_i = day() + 7;
  }
  
  for(let i = 0; i < 7; i++){
    x = ((i%7)+0.25)*w;
    y = 0.0*h;
    fill(0);
    stroke(255);
    strokeWeight(5);
    rect(this.x, this.y, w, 0.4*h, r);
    
    x = ((i%7)+0.75)*w;
    y = 0.3*h;
    noStroke();
    fill(255, 127, 0);
    textSize(w/8);
    text(weekdays[i], x, y);
  }
  
  for(let i = 0; i < 38; i++){
    days[i].show();
  }
  
  digital();
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
    rect(this.x, this.y, w, h, r);
    
    if(this.i == current_i){
      this.dx = map(hour() + minute()/60, 0, 24, 0, w);
      stroke(127);
      line(this.x + this.dx, this.y, this.x + this.dx, this.y + h);
    }
    
    stroke(255);
    noFill();
    rect(this.x, this.y, w, h, r);
    
    noStroke();
    fill(255, 0, 0);
    textSize(w/10);
    text(this.exam, this.x + w/2, this.y + 0.8*h);
    fill(255);
    textSize(w/5);
    text(this.day + "/" + this.month, this.x + w/2, this.y + 0.4*h);
  }
}

function digital(){
  translate(0, height/2);
  //hours
  if(hour() < 10){
    numbers[0].update(10);
  }else{
    numbers[0].update(floor(hour()/10));
  }
  numbers[1].update(hour() - floor(hour()/10)*10);  
  
  //minutes
  if(minute() < 10){
    numbers[2].update(0);
  }else{
    numbers[2].update(floor(minute()/10));
  }
  numbers[3].update(minute() - floor(minute()/10)*10);   
  
  
  //show numbers
  for(let number of numbers){
    number.show();
  }
  
  //dots
  strokeWeight(u/3);
  stroke(255);
  point(5.5*u + 7.2*w, 0.8*u);
  point(5.5*u + 7.2*w, -0.8*u);
}

class Numbers{
  constructor(x, y, p){
    this.x = x;
    this.y = y;
    this.n = 8;
    this.u = p;
  }
  
  show(){
    strokeWeight(this.u/3);
    
    //      1
    //     ---
    //  2 |   | 3
    //    | 4 |
    //     ---
    //  5 |   | 6
    //    |   |
    //     ---
    //      7
      
    //1
    this.list = [0, 2, 3, 5, 6, 7, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.6*this.u), this.y - (2*this.u), this.x + (0.6*this.u), this.y - (2*this.u));
    
    //2
    this.list = [0, 4, 5, 6, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.8*this.u), this.y - (1.6*this.u), this.x - (0.8*this.u), this.y - (0.4*this.u));
    
    //3
    this.list = [0, 1, 2, 3, 4, 7, 8, 9];
    check(this.n, this.list);
    line(this.x + (0.8*this.u), this.y - (1.6*this.u), this.x + (0.8*this.u), this.y - (0.4*this.u));
    
    //4
    this.list = [2, 3, 4, 5, 6, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.6*this.u), this.y, this.x + (0.6*this.u), this.y);
    
    //5
    this.list = [0, 2, 6, 8];
    check(this.n, this.list);
    line(this.x - (0.8*this.u), this.y + (0.4*this.u), this.x - (0.8*this.u), this.y + (1.6*this.u));
    
    //6
    this.list = [0, 1, 3, 4, 5, 6, 7, 8, 9];
    check(this.n, this.list);
    line(this.x + (0.8*this.u), this.y + (0.4*this.u), this.x + (0.8*this.u), this.y + (1.6*this.u));
    
    //7
    this.list = [0, 2, 3, 5, 6, 8, 9];
    check(this.n, this.list);
    line(this.x - (0.6*this.u), this.y + (2*this.u), this.x + (0.6*this.u), this.y + (2*this.u));
  }
  update(n){
    this.n = n;
  }
}

function check(n, list){
  if(list.includes(n)){
    stroke(255);  
  }else{
    noStroke(); 
  }  
}
