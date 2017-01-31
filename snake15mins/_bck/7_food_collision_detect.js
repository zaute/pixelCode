		// check for food collision
		if(head_x*size > f.x*f.size && head_x*size < f.x*f.size + f.size && head_y*size > f.y*f.size && head_y*size <f.y*f.size + f.size) {
			f = new Food();

			var increaseLength = 50;
			var tail = snake.pop();

			for(var i = 0; i <= increaseLength; i++) {
				snake.push({x: tail.x+i, y: tail.y.i});
			}
		}
		else {

			//Move snake code insert here!


		}