var ui = {};
var difficultyView = `	<div class="difficulty">
							<h2 class="question">How challenging should the AI player be?</h2>
							<p class="choices"><span class="choice-blind">Blind</span><br />
								<span class="choice-novice">Novice</span><br />
								<span class="choice-challenging">Challenging</span><br />
								<span class="choice-master">Master</span></p>
						</div>`;
var tokenView = `	<div class="token">
						<h2 class="question">Would you like to play as Player X or Player O?</h2>
						<p class="choices"><span class="choice-X">X</span> | <span class="choice-O">O</span></p>
					</div>`;
var gameView = `<div class="game">
					<table class="gamegrid">
						<tr>
							<td class="c-left r-top" data-val="0"></td>
							<td class="c-center r-top" data-val="1"></td>
							<td class="c-right r-top" data-val="2"></td>
						</tr>
						<tr>
							<td class="c-left r-center" data-val="3"></td>
							<td class="c-center r-center" data-val="4"></td>
							<td class="c-right r-center" data-val="5"></td>
						</tr>
						<tr>
							<td class="c-left r-bottom" data-val="6"></td>
							<td class="c-center r-bottom" data-val="7"></td>
							<td class="c-right r-bottom" data-val="8"></td>
						</tr>
					</table>
				</div>`;
var notifHuman = "It is your turn.";
var notifCPU = "It is the computer&rsquo;s turn.";
var notifHumanWon = "You won this round!";
var notifCpuWon = "The computer won this round.";
var notifTie = "This round was a tie.";
ui.switchViewTo = function (view) {
	switch (view) {
		case "difficulty":
			$(".view").fadeOut(500, function () {
				$(".view").html(difficultyView).fadeIn(500);
				difficultyControls();
			});
			break;
		case "token":
			$(".view").fadeOut(500, function () {
				$(".view").html(tokenView).fadeIn(500);
				tokenControls();
			});
			break;
		case "game":
			$(".view").fadeOut(500, function () {
				$(".view").html(gameView).fadeIn(500);
			});
		case "human":
			$(".notification").fadeOut(250, function () {
				$(".notification").html(notifHuman).fadeIn(250);
			});
			human();
			break;
		case "cpu":
			$(".notification").fadeOut(250, function () {
				$(".notification").html(notifCPU).fadeIn(250);
			});
			break;
		case "human won":
			$(".player-score").text(control.game.currentState.humanScore);
			$(".notification").fadeOut(250, function () {
				$(".notification").html(notifHumanWon).fadeIn(250).delay(1000).fadeOut(250, function () {
					$(".notification").html("");
				});
			});
			break;
		case "cpu won":
			$(".cpu-score").text(control.game.currentState.cpuScore);
			$(".notification").fadeOut(250, function () {
				$(".notification").html(notifCpuWon).fadeIn(250).delay(1000).fadeOut(250, function () {
					$(".notification").html("");
				});
			});
			break;
		case "tie":
			$(".notification").fadeOut(250, function () {
				$(".notification").html(notifTie).fadeIn(250).delay(1000).fadeOut(250, function () {
					$(".notification").html("");
				});
			});
			break;
	}
};
ui.insertAt = function (position, player) {
	$("[data-val='" + position + "']").text(player);
};
$(document).ready(function () {
	ui.switchViewTo("difficulty");
});