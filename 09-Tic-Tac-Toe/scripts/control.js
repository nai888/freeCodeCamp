var control = {};
control.chooseDifficulty = function (choice) {
	var self = this;
	var ai = new AI(choice);
	control.game = new Game(ai);
	ai.plays(control.game);
	$(".cpu-name").text(choice.charAt(0).toUpperCase() + choice.substr(1) + ":");
	ui.switchViewTo("token");
};
control.chooseToken = function (choice) {
	ui.switchViewTo("game");
	control.game.startGame(choice);
};
control.reset = function () {
	control.game.status = "start";
	control.game.currentState.human = "";
	control.game.currentState.cpu = "";
	control.game.currentState.turn = "X";
	control.game.currentState.moves = 0;
	control.game.currentState.result = "still running";
	control.game.currentState.board = ["", "", "", "", "", "", "", "", ""];
	ui.switchViewTo("token");
};
control.resetScore = function () {
	control.game.currentState.humanScore = 0;
	$(".player-score").text(control.game.currentState.humanScore);
	control.game.currentState.cpuScore = 0;
	$(".cpu-score").text(control.game.currentState.cpuScore);
	$(".cpu-name").text("Computer");
	ui.switchViewTo("difficulty");
};

function difficultyControls() {
	$(".choice-blind").click(function () {
		control.chooseDifficulty("blind");
	});
	$(".choice-novice").click(function () {
		control.chooseDifficulty("novice");
	});
	$(".choice-challenging").click(function () {
		control.chooseDifficulty("challenging");
	});
	$(".choice-master").click(function () {
		control.chooseDifficulty("master");
	});
}

function tokenControls() {
	$(".choice-X").click(function () {
		control.chooseToken("X");
	});
	$(".choice-O").click(function () {
		control.chooseToken("O");
	});
}

$(document).ready(function () {
	$(".reset").click(function () {
		control.resetScore();
	});
});