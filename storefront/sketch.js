function setup() {
  createCanvas(600, 405); //storefront
  rectMode(CORNER);

  stroke(0); //line color
  fill(225); //color
  rect(0, 0, 600, 405); //setup the storefront

  fill(225); //white
  rect(0, 0, 600, 100); //the sign space
  rect(0, 100, 330, 270); //the large glass
  rect(450, 100, 150, 270); //the small glass
  line(0, 370, 600, 370); //stoop
}

function draw() {
  fill(255);
  rect(5, 105, 320, 255); //activate the large glass
  rect(455, 105, 140, 255); //activate the small glass
  rect(335, 105, 110, 230); //activate the door

}