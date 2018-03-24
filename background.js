function main()
{
	//var fs = require('fs');
	//var fileList = fs.readdirSync('/Background/');

	var fileList = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.png', '9.jpg',
					'10.jpg', '11.jpg', '12.jpg', '13.png', '14.jpg', '15.jpg', '16.jpg', '17.jpg',
					'18.jpg', '19.jpg', '20.jpg', '21.jpg', '22.jpg', '23.png', '24.jpg', '25.jpg',
					'26.jpg', '27.jpg', '28.jpg', '29.jpg', '30.jpg', '31.jpg', '32.jpg', '33.jpg',
					'34.jpg'];

	var len = fileList.length;
	var index = Math.floor(Math.random() * len);
	var filePath = 'Background/' + fileList[index];

	document.body.style.backgroundImage = 'url("'+filePath+'")';
}

$(document).ready(main);