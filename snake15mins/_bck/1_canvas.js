	<script type="text/javascript">
	var snake,
		size = 3,
		dir,
		game_loop;

	// init canvas
	var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d"),
		w = window.innerWidth,
		h = window.innerHeight;

	canvas.height = h;
	canvas.width = w;

	// paint the canvas
	function paintCanvas() {
		ctx.fillStyle = "black";
		ctx.fillRect(0, 0, w, h);
	}

	function draw() {
		paintCanvas();
	}

	function start() {
		if(typeof game_loop != "undefined") clearInterval(game_loop); 
		game_loop = setInterval(draw, 2);
	}
	</script>
