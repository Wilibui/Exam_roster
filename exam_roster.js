let weekdays = ["MAANDAG", "DINSDAG", "WOENSDAG", "DONDERDAG", "VRIJDAG", "ZATERDAG", "ZONDAG"];
let exams = ["Warmte en Stroming", "Ingenieur en duur", "Wisselstroomnetten", "Wiskunde", "Data engeneering", "Besturingssystemen"];
let plan = ["W&S", "I&D", "WSN", "WIS", "DE", "BS"];

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
  
  c = true;
  
  setupDays();
  setupTime();
}

function draw() {
  if(c){background(127, 0, 0);}
  else{background(75);}

  calculateValues();
  showWeekDays();
  progressBar();
  showDays();
  showButton();    
  time();
}

function mouseReleased(){  
  if(dist(mouseX, mouseY, (width-0.5*w), (0.5*h)) <= 0.125*w){
    if(c){c = false;}
    else{c = true;}
  }
}

function showButton(){
  if(c){fill(0);}
  else{fill(255);}
  circle(width-0.5*w, 0.5*h, 0.25*w);
}

function calculateValues(){
  if(month() == 12){current_i = day() - 25;}
  else{current_i = day() + 6;}
}
