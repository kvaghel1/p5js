var s;
var scl = 20;
var food;
var frame_rate = 5;
var start_game = true;
// Up -1 | Down - 2 | right - 3 | left - 4 
var last_key = -1;

function setup() {
	scl = 20;
	frame_rate = 5;
	start_game = true;
	last_key = -1;
	console.log("hit",start_game);
	debugger;
	if(confirm("Start Game ?")) {
		createCanvas(600,600);
		s = new Snake();
		createFood();
	}
	else {
		start_game = false;
	}
}

function createFood() {
	food = createVector(Math.floor(Math.random()*10)*scl*3,Math.floor(Math.random()*10)*scl*3);
}

function draw() {
	if(start_game) {
  
	  frameRate(frame_rate); 
	  background(51);
	  s.update();
	  s.show();
	  
	  fill(255,0,100);
	  rect(food.x,food.y,scl,scl);
	  
	  if (s.eat(food)) {
		//food = createVector(Math.floor(Math.random()*10)*scl,Math.floor(Math.random()*10)*scl);
		createFood();
		s.total++; 
		frame_rate += 1;
	  }
	  if (s.dead()) {
			End();
	  }
  }
  else {
  	start_game = false;
  	End();
  }
}

function End() {
	var b,t;
  	noLoop();
	t = "Game Over !";
	textSize(32);
	fill(0,102,153);
	text(t,200,280);
	
/*	b = createButton('Restart');
  	b.position(240,300);
  	b.mousePressed(setup);*/
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		if(last_key != 2) {
			s.dir(0,-1);
			last_key = 1;
		}
	}
	else if (keyCode === DOWN_ARROW) {
		if(last_key != 1) {
			s.dir(0,1);
			last_key = 2;
		}
	}
	else if (keyCode === LEFT_ARROW) {
		if(last_key != 3) {
			s.dir(-1,0);
			last_key = 4;
		}
	}
	else if (keyCode === RIGHT_ARROW) {
		if(last_key != 4) {
			s.dir(1,0);
			last_key = 3;
		}
	}
}
