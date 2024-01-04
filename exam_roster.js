let weekdays = ["MAANDAG", "DINSDAG", "WOENSDAG", "DONDERDAG", "VRIJDAG", "ZATERDAG", "ZONDAG"];
let exams = ["Warmte en Stroming", "Ingenieur en duur", "Wisselstroomnetten", "Wiskunde", "Data engeneering", "Besturingssystemen"];
let exam_days = [13, 15, 20, 24, 27, 31];


let days = [];
let numbers = [];
let current_i;
let c;

let w;
let h;
let r;
let u;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  
  w = width/10;
  h = height/7.5;
  u = width/40; 
  r = 5;
  c = false;
  
  setupDays();
  setupTime();
}


function draw() {
  if(c){
    background(127, 0, 0);
  }else{
    background(75);
  }
  

  calculateValues();
  showWeekDays();
  progressBar();
  showDays();
  
  
  
  if(c){
    fill(0);
  }else{
    fill(255);
  }
  circle(width-0.5*w, 0.5*h, 0.25*w);
  
  time();
}

function mouseReleased(){
  
  if(dist(mouseX, mouseY, (width-0.5*w), (0.5*h)) <= 0.125*w){
    if(c){
      c = false;
    }else{
      c = true;
    }
  }
}

function calculateValues(){
  if(month() == 12){ 
    current_i = day() - 25;
  }else{
    current_i = day() + 6;
  }
}
