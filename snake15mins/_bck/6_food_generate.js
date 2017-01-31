	var Food = function() {
		this.size = 50;
		this.x = Math.round(Math.random() * (w - this.size) / this.size);
		this.y = Math.round(Math.random() * (h - this.size) / this.size);
		
		this.draw = function() {
			ctx.fillStyle = "white";
			ctx.fillRect(this.x*this.size, this.y*this.size, this.size, this.size);
		}
	}
			
	var f = new Food();