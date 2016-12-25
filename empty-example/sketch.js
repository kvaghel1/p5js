var s;
var scl = 20;
var food;
function setup() {
	createCanvas(600,600);
	s = new Snake();
	frameRate(20); 
	food = createVector(Math.floor(Math.random()*10)*scl,Math.floor(Math.random()*10)*scl);
}



function draw() {
  background(51);
  s.update();
  s.show();
  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
  if (s.eat(food)) {
	food = createVector(Math.floor(Math.random()*10)*scl,Math.floor(Math.random()*10)*scl);
	s.total += 1; 
  }
  	  
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0,-1);
	}
	else if (keyCode === DOWN_ARROW) {
		s.dir(0,1);
	}
	else if (keyCode === LEFT_ARROW) {
		s.dir(-1,0);
	}
	else if (keyCode === RIGHT_ARROW) {
		s.dir(1,0);
	}
}
