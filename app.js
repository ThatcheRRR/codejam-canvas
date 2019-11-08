const square = [
    ["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"],
    ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
    ["FFEB3B", "FFC107", "FFC107", "FFEB3B"],
	["00BCD4", "FFEB3B", "FFEB3B", "00BCD4"]];
const squareSize = 4,
	  bigSquareSize = 32,
 	  imageSize = 512;
function drawing(size) {
	const field = document.querySelector('canvas'),
		  maxFieldSize = 512,
		  ctx = field.getContext('2d'),
		  scale = Math.round(maxFieldSize / size);
		  field.width = 512;
		  field.height = 512;
	let blockWidth = 0,
		blockHeight = 0;
	switch(size) {
		case squareSize:
			blockWidth = square[0].length,
			blockHeight = square.length;
        	for (let row = 0; row < blockWidth; row++) {
        		for (let col = 0; col < blockHeight; col++) {
            		ctx.fillStyle = '#' + square[row][col];
            		ctx.fillRect(col * scale, row * scale, scale, scale);
            	}
        	}
		break;
    	case bigSquareSize:
			blockWidth = bigSquare[0].length,
			blockHeight = bigSquare.length;
			for (let row = 0; row < blockWidth; row++) {
				for (let col = 0; col < blockHeight; col++) {
					ctx.fillStyle = `rgba(${bigSquare[row][col]})`;
					ctx.fillRect(col * scale, row * scale, scale, scale);
				}
			}
		break;
    	case imageSize:
			const img = new Image();
			img.onload = function() {
				ctx.drawImage(img, 0, 0, field.width = 512, field.height = 512);
			}
			img.src = 'image.png';
		break;
    }
}
const sizeSwitcher = document.querySelectorAll('.switcher__size');
const checkbox = document.querySelectorAll('.switcher__size_checkbox');
for (let i = 0; i < sizeSwitcher.length; i++) {
	sizeSwitcher[i].addEventListener('click', function() {
		for (let j = 0; j < sizeSwitcher.length; j++) {
			sizeSwitcher[j].className = 'switcher__size';
			checkbox[j].className = 'switcher__size_checkbox';
		}
		if (sizeSwitcher[i].innerText === '4x4') {
			sizeSwitcher[i].classList.add('current-size');
			checkbox[i].classList.add('current-size__checkbox');
			drawing(squareSize);
		}
		if (sizeSwitcher[i].innerText === '32x32') {
			sizeSwitcher[i].classList.add('current-size');
			checkbox[i].classList.add('current-size__checkbox');
			drawing(bigSquareSize);
		}
		if (sizeSwitcher[i].innerText === '512x512') {
			sizeSwitcher[i].classList.add('current-size');
			checkbox[i].classList.add('current-size__checkbox');
			drawing(imageSize);
		}
	});
}