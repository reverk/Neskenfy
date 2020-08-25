$(document).ready(function() {
	var chance = Math.floor(Math.random() * 100);
	if(true) {
		neskenfy();
	}
});

var generateHTML = function() {
	var html = "<img src='https://raw.githubusercontent.com/Roystbeef/Cenafy/master/john_cena.gif' alt='temp' width='100%' height='100%'>"
	return html;
};

var neskenfy = function() {
	setTimeout(function() { // Wait 5 seconds before cenafying
		var audio = new Audio('https://raw.githubusercontent.com/Roystbeef/Cenafy/master/john_cena.mp3')
		var html = generateHTML();
		audio.play();
		$('body').html(html);
		document.body.style.backgroundColor = "black";
		setTimeout(function() { // Wait 20 seconds for cena to finish
			window.location.replace(document.URL);
		}, 20000);
	}, 5000);
};
