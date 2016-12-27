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
		this.x = this.x + this.xspeed*scl;
		this.y = this.y + this.yspeed*scl;
		console.log("Points:",this.x,this.y);
		this.last_pos.push(createVector(this.x,this.y));

//		this.x = constrain(this.x,0,width-scl);
//		this.y = constrain(this.y,0,height-scl);
	}

	this.show = function() {
		fill(255);

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

	this.dead = function() {
		var check_dead = (this.x < 0 || this.x > width-scl || this.y < 0 || this.y > height-scl )
		var l = this.last_pos.length ;

		if( !check_dead ){
			for(var i = 2 ; i < this.total-1 ; i++) {
				var d = dist(this.x,this.y,this.last_pos[l-i].x,this.last_pos[l-i].y);
				console.log("D:",this.x,this.y,this.last_pos[l-i].x,this.last_pos[l-i].y,d);
				if ( d == 0) {
					check_dead = true;
					break;
				}
				else {
					check_dead = false;
				}

			}
		}

		if(check_dead) {
			return true;
		}
		else {
			return false;
		}
	}
}