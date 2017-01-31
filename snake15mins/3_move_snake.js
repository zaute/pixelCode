	// update snake
	function updateSnake() {	
		var head_x = snake[0].x;
		var head_y = snake[0].y;

		if(dir == "right") head_x++;
		else if(dir == "left") head_x--;
		else if(dir == "up") head_y--;
		else if(dir == "down") head_y++;

		//Move snake
		var tail = snake.pop();
		tail.x = head_x;
		tail.y = head_y;
		snake.unshift(tail);			
	}
