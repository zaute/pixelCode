		// check crashing with your on body
		for(var i=1;i <= snake.length-1; i++) {			
			if(head_x == snake[i].x && head_y == snake[i].y)
			{
				gameOver();
			}
		}




	function gameOver() {
		clearInterval(game_loop);
	}