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
  h = height/7.5;
  u = width/40; 
  r = 10;
  
  setupDays();
  setupTime();
}


function draw() {
  background(127, 0, 0);

  calculateValues();
  showWeekDays();
  progressBar();
  showDays();
  time();
}

function calculateValues(){
  if(month() == 12){ 
    current_i = day() - 25;
  }else{
    current_i = day() + 6;
  }
}
