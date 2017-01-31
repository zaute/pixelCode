		// check keypress
		document.onkeydown = function(e) {
			var key = e.keyCode;
			
			if(key == 37 && dir != "right") setTimeout(function() {dir = "left"; }, 30);
			else if(key == 38 && dir != "down") setTimeout(function() {dir = "up"; }, 30);
			else if(key == 39 && dir != "left") setTimeout(function() {dir = "right"; }, 30);
			else if(key == 40 && dir != "up") setTimeout(function() {dir = "down"; }, 30);

			if(key) e.preventDefault();
		}
