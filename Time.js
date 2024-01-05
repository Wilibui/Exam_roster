function setupTime(){
  numbers[0] = new Numbers(1.5*u + 7.2*w, 0);
  numbers[1] = new Numbers(4*u + 7.2*w, 0);
  numbers[2] = new Numbers(7*u + 7.2*w, 0);
  numbers[3] = new Numbers(9.5*u + 7.2*w, 0);
}

function time(){
  translate(0, height/2);
  //hours
  if(hour() < 10){numbers[0].update(10);}
  else{numbers[0].update(floor(hour()/10));}
  numbers[1].update(hour() - floor(hour()/10)*10);  
  
  //minutes
  if(minute() < 10){numbers[2].update(0);}
  else{numbers[2].update(floor(minute()/10));}
  numbers[3].update(minute() - floor(minute()/10)*10);   
  
  //show numbers
  for(let number of numbers){number.show();}
  
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
  }
  
  show(){
    strokeWeight(u/3);
    
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
    this.check(this.n, this.list);
    line(this.x - (0.6*u), this.y - (2*u), this.x + (0.6*u), this.y - (2*u));
    
    //2
    this.list = [0, 4, 5, 6, 8, 9];
    this.check(this.n, this.list);
    line(this.x - (0.8*u), this.y - (1.6*u), this.x - (0.8*u), this.y - (0.4*u));
    
    //3
    this.list = [0, 1, 2, 3, 4, 7, 8, 9];
    this.check(this.n, this.list);
    line(this.x + (0.8*u), this.y - (1.6*u), this.x + (0.8*u), this.y - (0.4*u));
    
    //4
    this.list = [2, 3, 4, 5, 6, 8, 9];
    this.check(this.n, this.list);
    line(this.x - (0.6*u), this.y, this.x + (0.6*u), this.y);
    
    //5
    this.list = [0, 2, 6, 8];
    this.check(this.n, this.list);
    line(this.x - (0.8*u), this.y + (0.4*u), this.x - (0.8*u), this.y + (1.6*u));
    
    //6
    this.list = [0, 1, 3, 4, 5, 6, 7, 8, 9];
    this.check(this.n, this.list);
    line(this.x + (0.8*u), this.y + (0.4*u), this.x + (0.8*u), this.y + (1.6*u));
    
    //7
    this.list = [0, 2, 3, 5, 6, 8, 9];
    this.check(this.n, this.list);
    line(this.x - (0.6*u), this.y + (2*u), this.x + (0.6*u), this.y + (2*u));
  }
  
  update(n){
    this.n = n;
  }
  
  check(n, list){
    if(list.includes(n)){stroke(255);}
    else{noStroke();}  
  }
}
