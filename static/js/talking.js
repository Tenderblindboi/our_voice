






	

	
		
		var canWidth =600;
		var canHeight =500;

		//the position where the frame will be drawn

		var x =0;
		var y = 0;

		var srcX;
		var srcY;

		var sheetWidth = 1200;
		var sheetHeight = 600;

		var cols = 2;
		var rows = 1;



		var width = sheetWidth / cols;
		var height = sheetHeight /rows;

		var currentFrame = 0;

		var character = new Image();
		character.src ="{{ url_for('static', filename='img/talking.png')}}";

		var canvas = document.getElementById('canvas');
		canvas.width =canWidth;
		canvas.height = canHeight;

		var ctx = canvas.getContext('2d');

		function updateFrame(){

			currentFrame=++currentFrame % cols;
			srcX = currentFrame * width;
			srcY = 0;

			ctx.clearRect(x,y,width,height);
		}

		function drawImage(){
			updateFrame();
			ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);

		}

		setInterval(function(){

			drawImage();

		},200);






