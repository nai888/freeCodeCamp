var pattern = [];
var rePattern = [];
var power = false;
var playing = false;
var strict = false;
var lightsInterval;
var playerTimeout;
var digits;
const ulSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound1.mp3");
const urSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound2.mp3");
const llSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound3.mp3");
const lrSound = new Audio("https://s3.amazonaws.com/freecodecamp/simonSound4.mp3");

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
	$(".ul, .ur, .ll, .lr").removeClass("clickable").addClass("unclickable");
	if (power && playing) {
		pattern.push(Math.floor(Math.random() * 4));
		if (pattern.length < 10) {
			digits = "0" + pattern.length;
		} else {
			digits = pattern.length;
		}
		$(".digits").text(digits);
		lightPattern();
	}
}

function lightPattern() {
	if (power && playing) {
		var speed;
		if (pattern.length < 5) {
			speed = 1600;
		} else if (pattern.length < 9) {
			speed = 1300;
		} else if (pattern.length < 13) {
			speed = 1000;
		} else {
			speed = 700;
		}
		var t = 0;
		lightsInterval = setInterval(function () {
			var btn = translateToBtns(pattern[t]);
			$("." + btn).addClass("on");
			playAud(parseInt(pattern[t]));
			setTimeout(function () {
				$("." + btn).removeClass("on");
			}, (speed / 2));
			t++;
			if (t >= pattern.length) {
				clearInterval(lightsInterval);
				var playTimer = 5000;
				if (pattern.length > 6) {
					playTimer = (pattern.length * 1000) * 0.8;
				}
				playerTimeout = setTimeout(function () {
					if (strict) {
						strictWrong();
					} else {
						wrong();
					}
					rePattern.length = 0;
				}, playTimer);
				clickable();
			}
		}, speed);
	}
}

function wrong() {
	unclickable();
	$(".digits").text("-!");
	setTimeout(function () {
		$(".digits").text(digits);
		lightPattern();
	}, 2000);
}

function strictWrong() {
	unclickable();
	pattern = [];
	$(".digits").text("!!");
	setTimeout(function () {
		play();
	}, 2000);
}

function win() {
	unclickable();
	pattern = [];
	rePattern = [];
	$(".digits").text("$$");
	var on = true;
	$(".btn").addClass("on");
	var time = 4000;
	var flash = setInterval(function () {
		if (on) {
			on = false;
			$(".btn").removeClass("on");
		} else {
			on = true;
			$(".btn").addClass("on");
		}
	}, time / 8);
	setTimeout(function () {
		clearInterval(flash);
		$(".btn").removeClass("on");
		play();
	}, time);
}

function clickable() {
	$(".btn").removeClass("unclickable").addClass("clickable");
}

function unclickable() {
	$(".btn").removeClass("clickable").addClass("unclickable");
}

function playAud(btn) {
	switch (btn) {
		case 0:
			ulSound.play();
			break;
		case 1:
			urSound.play();
			break;
		case 2:
			llSound.play();
			break;
		case 3:
			lrSound.play();
			break;
	}
}

$(document).ready(function () {
	$(".power").click(function () {
		if (power) {
			power = false;
			playing = false;
			strict = false;
			clearInterval(lightsInterval);
			clearTimeout(playerTimeout);
			pattern = [];
			rePattern = [];
			unclickable();
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
				clearTimeout(playerTimeout);
				pattern = [];
				rePattern = [];
				unclickable();
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
	$(".btn").mousedown(function () {
		$(this).addClass("on");
		playAud(parseInt($(this).attr("data-val"), 10));

	})
	$(".btn").mouseup(function () {
		$(this).removeClass("on");
	})
	$(".btn").click(function () {
		rePattern.push(parseInt($(this).attr("data-val"), 10));
		if (rePattern.length >= pattern.length) {
			clearTimeout(playerTimeout);
			var equal = true;
			for (let l = 0; l < rePattern.length; l++) {
				if (rePattern[l] !== pattern[l]) {
					equal = false;
				}
			}
			if (equal) {
				if (pattern.length === 20) {
					win();
				} else {
					play();
				}
			} else {
				if (strict) {
					strictWrong();
				} else {
					wrong();
				}
			}
			rePattern.length = 0;
		}
	});
});