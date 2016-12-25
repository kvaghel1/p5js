function Snake() {
	this.x = 0;
	this.y = 0;
	this.total = 1;
	this.last_pos = [];
 
	this.xspeed = 1;
	this.yspeed = 0;

	this.dir = function(x,y) {
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function() {
		for(var i = 0 ; i< this.total -1  ;i++) {
			this.last_pos[i] = this.last_pos[i+1];
		}

		this.last_pos[this.total - 1 ] = createVector(this.x,this.y)

		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;

		this.x = constrain(this.x,0,width-scl);
		this.y = constrain(this.y,0,height-scl);
	}

	this.show = function() {
		fill(255);
		console.log(this.last_pos.length,this.total);
		for(var i =0 ; i < this.total ; i++) {
			rect(this.last_pos[i].x,this.last_pos[i].y,scl,scl);
		}

		rect(this.x,this.y,scl,scl);
	}

	this.eat = function(pos) {
		var d = dist(this.x,this.y,pos.x,pos.y);
		if(d<1) {
			return true;
		}
	}


}