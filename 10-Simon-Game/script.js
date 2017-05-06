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
	$(".ul, .ur, .ll, .lr").removeClass("clickable").addClass("unclickable");
	if (power && playing) {
		pattern.push(Math.floor(Math.random() * 4));
		if (pattern.length < 10) {
			digits = "0" + pattern.length;
		} else {
			digits = pattern.length;
		}
		$(".digits").text(digits);
		console.log("pattern:");
		console.log(pattern);
		lightPattern();
	}
}

function lightPattern() {
	if (power && playing) {
		var speed;
		if (pattern.length < 5) {
			speed = 1800;
		} else if (pattern.length < 9) {
			speed = 1500;
		} else if (pattern.length < 13) {
			speed = 1200;
		} else {
			speed = 900;
		}
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
				clickable();
			}
		}, speed);
	}
}

function wrong() {
	unclickable();
	$(".digits").text("!-");
	console.log("screen: !-");
	setTimeout(function () {
		$(".digits").text(digits);
		console.log("screen: " + digits + ", lightPattern()");
		lightPattern();
	}, 1000);
}

function strictWrong() {
	unclickable();
	pattern = [];
	$(".digits").text("!!");
	setTimeout(function () {
		play();
	}, 1000);
}

function clickable() {
	$(".ul, .ur, .ll, .lr").removeClass("unclickable").addClass("clickable");
}

function unclickable() {
	$(".ul, .ur, .ll, .lr").removeClass("clickable").addClass("unclickable");
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
	$(".btn").click(function () {
		rePattern.push(parseInt($(this).attr("data-val"), 10));
		console.log("rePattern:");
		console.log(rePattern);
		if (rePattern.length >= pattern.length) {
			var equal = true;
			for (let l = 0; l < rePattern.length; l++) {
				if (rePattern[l] !== pattern[l]) {
					equal = false;
				}
			}
			console.log(equal);
			if (equal) {
				console.log("ready to move on: play()");
				play();
			} else {
				if (strict) {
					console.log("wrong: strictWrong()");
					strictWrong();
				} else {
					console.log("wrong: wrong()");
					wrong();
				}
			}
			rePattern.length = 0;
		}
	});
});