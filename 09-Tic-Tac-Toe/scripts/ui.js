var ui = {};
ui.switchViewTo = function (view) {
	switch (view) {
		case "start":
			break;
		case "difficulty":
			break;
		case "human":
			break;
		case "cpu":
			break;
		case "human won":
			$(".player-score").text(AI.game.currentState.humanScore);
			break;
		case "cpu won":
			$(".cpu-score").text(AI.game.currentState.cpuScore);
			break;
		case "tie":
			break;
	}
};
ui.insertAt = function (position, player) {
	switch (position) {
		case 0:
			$("button.one").text(player);
			break;
		case 1:
			$("button.two").text(player);
			break;
		case 2:
			$("button.three").text(player);
			break;
		case 3:
			$("button.four").text(player);
			break;
		case 4:
			$("button.five").text(player);
			break;
		case 5:
			$("button.six").text(player);
			break;
		case 6:
			$("button.seven").text(player);
			break;
		case 7:
			$("button.eight").text(player);
			break;
		case 8:
			$("button.nine").text(player);
			break;
	}
};

$(document).ready(function () {
	ui.switchViewTo("start");
});