function setup() { 
  createCanvas(1400, 200);
	rectMode(CORNER);
} 

function draw() { 
  background(220);
	stroke(0);               //the lines are black
             
fill(255);               //white attributes
rect(40,40,70,60);       //first window
rect(230,100,30,100);    //door on white 
rect(280,30,130,170);    //rollgate on white             
rect(510,50,70,60);      //second window
rect(660,50,70,60);      //third window 
rect(810,50,70,60);      //fourth window 
line(980,00,980,200);    //line for the corner
rect(1050,30,130,170);   //rollgate on seigel
rect(1213,100,30,100);   //door on seigel 
}

// GRAFFITI SPOT, CORNER OF WHITE & SEIGEL, BUSHWICK NY