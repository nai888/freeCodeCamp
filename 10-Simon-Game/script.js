var pattern = [];
var rePattern = [];
var power = false;
var playing = false;
var strict = false;
var lightsInterval;
var digits;

function translateToBtns(btn) {
	switch (btn) {
		case 0:
			return "ul";
			break;
		case 1:
			return "ur";
			break;
		case 2:
			return "ll";
			break;
		case 3:
			return "lr";
			break;
	}
}

function play() {
	if (power && playing) {
		pattern.push(Math.floor(Math.random() * 4));
		if (pattern.length < 10) {
			digits = "0" + pattern.length;
		} else {
			digits = pattern.length;
		}
		$(".digits").text(digits);
		console.log(pattern);
		if (pattern.length < 5) { // Slowest
			lightPattern(2000);
		} else if (pattern.length < 9) { // Medium-slow
			lightPattern(1800);
		} else if (pattern.length < 13) { // Medium-fast
			lightPattern(1600);
		} else { // Fast
			lightPattern(1400);
		}
	}
}

function lightPattern(speed) {
	if (power && playing) {
		var t = 0;
		lightsInterval = setInterval(function () {
			var btn = translateToBtns(pattern[t]);
			$("." + btn).addClass("on");
			setTimeout(function () {
				$("." + btn).removeClass("on");
			}, (speed / 2));
			t++;
			if (t >= pattern.length) {
				clearInterval(lightsInterval);
			}
		}, speed);
		playerTurn();
	}
}

function playerTurn() {
	if (power && playing) {
		var l = rePattern.length;
		$(".btn").click(function () {
			// Identify which button was clicked to add the correct num to pattern array
		});
		if (strict) {
			// End the game and return to beginning
		} else {
			if (rePattern.length >= pattern.length) {
				play();
			} else {
				playerTurn();
			}
		}
	}
}

$(document).ready(function () {
	var $ul = $(".ul");
	var $ur = $(".ur");
	var $ll = $(".ll");
	var $lr = $(".lr");
	$(".power").click(function () {
		if (power) {
			power = false;
			playing = false;
			strict = false;
			clearInterval(lightsInterval);
			pattern = [];
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
				clearInterval(lightsInterval);
				pattern = [];
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