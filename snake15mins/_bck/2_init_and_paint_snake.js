	//init snake		
	function initSnake() {
		var length = 50;
		snake = [];
		dir = "right";
		for(var i = length - 1; i >= 0; i--) {
			snake.push({x: (i + w/(2*size)), y: h/(2*size)});
		}
	}	
	
	// paint snake
	function paintSnake() {
		for(var i = 0; i < snake.length; i++) {
			var s = snake[i];
			
			ctx.fillStyle = "white";
			ctx.fillRect(s.x*size, s.y*size, size, size);
		}
	}