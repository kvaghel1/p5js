var s;
var scl = 20;
var food;

// Up -1 | Down - 2 | right - 3 | left - 4 
var last_key = -1;

function setup() {
	createCanvas(600,600);
	s = new Snake();
	frameRate(10); 
	createFood();
	//food = createVector(Math.floor(Math.random()*10)*scl,Math.floor(Math.random()*10)*scl);
}

function createFood() {
	food = createVector(Math.floor(Math.random()*10)*scl*3,Math.floor(Math.random()*10)*scl*3);
}

function draw() {
  background(51);
  s.update();
  s.show();
  
  fill(255,0,100);
  rect(food.x,food.y,scl,scl);
  
  if (s.eat(food)) {
	//food = createVector(Math.floor(Math.random()*10)*scl,Math.floor(Math.random()*10)*scl);
	createFood();
	s.total++; 
  }
  	  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		if(last_key != 2) {
			console.log(last_key);
			s.dir(0,-1);
			last_key = 1;
		}
	}
	else if (keyCode === DOWN_ARROW) {
		if(last_key != 1) {
			console.log(last_key);
			s.dir(0,1);
			last_key = 2;
		}
	}
	else if (keyCode === LEFT_ARROW) {
		if(last_key != 3) {
			console.log(last_key);
			s.dir(-1,0);
			last_key = 4;
		}
	}
	else if (keyCode === RIGHT_ARROW) {
		console.log(last_key);
		if(last_key != 4) {
			s.dir(1,0);
			last_key = 3;
		}
	}
}
