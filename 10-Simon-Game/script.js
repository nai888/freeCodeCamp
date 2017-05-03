var pattern = [];
var rePattern = [];
var power = false;
var playing = false;
var strict = false;

function play() {
	if (power && playing) {
		pattern.push(Math.floor(Math.random() * 4));
		lightPattern();
	}
}

function lightPattern() {
	if (power && playing) {
		var t = 0;
		setInterval(function () {

		}, 1000);
	}
}

$(document).ready(function () {
	$(".power").click(function () {
		if (power) {
			power = false;
			playing = false;
			strict = false;
			$(".power, .start, .strict, .screen").removeClass("on");
		} else {
			power = true;
			$(".power, .screen").addClass("on");
		}
	});
	$(".start").click(function () {
		if (power) {
			if (playing) {
				playing = false;
				$(".start").removeClass("on");
			} else {
				playing = true;
				$(".start").addClass("on");
				play();
			}
		}
	});
	$(".strict").click(function () {
		if (power) {
			if (strict) {
				strict = false;
				$(".strict").removeClass("on");
			} else {
				strict = true;
				$(".strict").addClass("on");
			}
		}
	});
});