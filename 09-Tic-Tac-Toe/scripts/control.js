var control = {};
var chosenToken = "";
var chosenDifficulty = "master";

control.chooseToken = function (choice) {
	chosenToken = choice;
	ui.switchViewTo("difficulty");
};

control.chooseDifficulty = function (choice) {
	chosenDifficulty = choice;
	var ai = new AI(chosenDifficulty);
	control.game = new Game(ai);
	ai.plays(control.game);
	control.game.startGame(chosenToken);
};

$(".choiceX").click(function () {
	control.chooseToken("X");
});
$(".choiceO").click(function () {
	control.chooseToken("O");
});