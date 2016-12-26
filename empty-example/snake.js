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

		/*if(this.total === this.last_pos.length) {
			for(var i = 0 ; i< this.last_pos -1  ;i++) {
				this.last_pos[i] = this.last_pos[i+1];
			}
		}

		this.last_pos[this.total - 1 ] = createVector(this.x,this.y)*/
		
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
		
		this.last_pos.push(createVector(this.x,this.y));

		this.x = constrain(this.x,0,width-scl);
		this.y = constrain(this.y,0,height-scl);
	}

	this.show = function() {
		fill(255);
		/*for(var i = 1 ; i <= this.total ; i++) {
			console.log(i,this.total);
			rect(this.x - ((this.xspeed*scl)*i) ,this.y - ((this.yspeed*scl)*i),scl,scl);
		}*/
		var l = this.last_pos.length;
		for(var i = 0 ; i < this.total ; i++) {
			//console.log(i,this.total);
			rect(this.last_pos[l-i-1].x ,this.last_pos[l-i-1].y,scl,scl);
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