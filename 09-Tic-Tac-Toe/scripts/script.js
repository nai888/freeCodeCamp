function ticTacToe() {

	// Game Initialization

	var State = function (oldState, move) {
		var self = this;
		/*this.turnToken = function () {
			if (self.getAvailableMoves().length % 2 === 0) {
				return "O";
			} else {
				return "X";
			}
		};*/
		this.isPlayerTurn = function () {
			if (self.turnToken === self.playerToken) {
				return true;
			} else {
				return false;
			}
		};
		this.getAvailableMoves = function () {
			var possibleMoves = [];
			var keys = Object.keys(self.grid);
			for (var i = 0; i < keys.length; i++) {
				if (self.grid[keys[i]] === "") {
					possibleMoves.push(i + 1);
				}
			}
			return possibleMoves;
		};
		this.checkSolutions = function (player) {
			if (self.grid.one === player && self.grid.two === player && self.grid.three === player) {
				return true;
			} else if (self.grid.four === player && self.grid.five === player && self.grid.six === player) {
				return true;
			} else if (self.grid.seven === player && self.grid.eight === player && self.grid.nine === player) {
				return true;
			} else if (self.grid.one === player && self.grid.four === player && self.grid.seven === player) {
				return true;
			} else if (self.grid.two === player && self.grid.five === player && self.grid.eight === player) {
				return true;
			} else if (self.grid.three === player && self.grid.six === player && self.grid.nine === player) {
				return true;
			} else if (self.grid.one === player && self.grid.five === player && self.grid.nine === player) {
				return true;
			} else if (self.grid.three === player && self.grid.five === player && self.grid.seven === player) {
				return true;
			} else {
				return false;
			}
		};
		this.gameIsOver = function () {
			if (self.checkSolutions(self.cpuToken) || self.checkSolutions(self.playerToken) || self.getAvailableMoves().length < 1) {
				console.log("game is over");
				return true;
			} else {
				return false;
			}
		};
		if (typeof oldState === "undefined") {
			self.grid = {
				one: "",
				two: "",
				three: "",
				four: "",
				five: "",
				six: "",
				seven: "",
				eight: "",
				nine: ""
			};
			self.turnToken = "X";
			self.playerToken = "";
			self.cpuToken = "";
		} else {
			self.turnToken = oldState.turnToken;
			self.playerToken = oldState.playerToken;
			self.cpuToken = oldState.cpuToken;
			self.grid = oldState.grid;
			console.log(self.grid);
			self.grid[move] = self.turnToken;
			console.log(self.grid);
			console.log(self.turnToken);
			self.turnToken = self.turnToken === "X" ? "O" : "X";
			console.log(self.turnToken);
		}
	}

	var Game = function () {
		var self = this;
		this.playerScore = 0;
		this.cpuScore = 0;
		this.currentState = new State();
		console.log(self.currentState);
		this.advanceTo = function (updatedState) {
			console.log(self.currentState);
			self.currentState = updatedState;
			console.log(self.currentState);
			updateGrid();
			if (self.currentState.gameIsOver()) {
				console.log("self.recordWinner()");
				self.recordWinner();
			} else {
				console.log("nextTurn()");
				nextTurn();
			}
		};
		this.recordWinner = function () {
			if (self.currentState.checkSolutions(self.currentState.playerToken)) {
				console.log('player win');
				self.playerScore += 1;
				console.log('showWinner(game.playerToken)');
				showWinner(self.currentState.playerToken);
			} else if (self.currentState.checkSolutions(self.currentState.cpuToken)) {
				console.log('cpu win');
				self.cpuScore += 1;
				console.log('showWinner(game.cpuToken)');
				showWinner(self.currentState.cpuToken);
			} else if (self.currentState.getAvailableMoves().length < 1) {
				console.log('showWinner("tie")');
				showWinner("tie");
			}
		};
		this.resetBoard = function () {
			self.currentState = new State();
			resetView();
		}

		this.resetScore = function () {
			console.log("new game");
			game = new Game();
			resetView();
		}
	}

	var game = new Game();

	// View components

	function choiceMadeView() {
		$(".question, .choices").fadeOut(500, function () {
			$(".chosen").text("Player " + game.currentState.playerToken).fadeIn(500, function () {
				$(".choice").delay(1000).fadeOut(500, function () {
					$(".game, .score, .gamegrid").fadeIn(500, function () {
						$(".question, .choices").css("display", "block");
						$(".chosen").css("display", "none");
					});
				});
			});
		});
	}

	function showWinner(winner) {
		$(".gamegrid").fadeOut(500, function () {
			if (winner === "tie") {
				$(".winner").text("It was a tie.");
			} else {
				$(".winner").text("Player " + winner + " wins!");
			}
			$(".winner").fadeIn(500).delay(1000).fadeOut(500, function () {
				game.resetBoard();
			});
		});
		updateScore();
	}

	function updateGrid() {
		$("button.one").text(game.currentState.grid.one);
		$("button.two").text(game.currentState.grid.two);
		$("button.three").text(game.currentState.grid.three);
		$("button.four").text(game.currentState.grid.four);
		$("button.five").text(game.currentState.grid.five);
		$("button.six").text(game.currentState.grid.six);
		$("button.seven").text(game.currentState.grid.seven);
		$("button.eight").text(game.currentState.grid.eight);
		$("button.nine").text(game.currentState.grid.nine);
	}

	function updateScore() {
		$(".player-score").text(game.playerScore);
		$(".cpu-score").text(game.cpuScore);
	}

	function resetView() {
		$(".game").fadeOut(500, function () {
			updateGrid();
			$(".winner").text("");
			$(".choice").fadeIn(500);
		});
		updateScore();
	}

	// Operational components

	function choiceMade(choice) {
		if (choice === "X") {
			game.currentState.playerToken = "X";
			game.currentState.cpuToken = "O";
		} else if (choice === "O") {
			game.currentState.playerToken = "O";
			game.currentState.cpuToken = "X";
		}
		choiceMadeView();
	}

	$(".choiceX").click(function () {
		choiceMade("X");
		playerTurn();
	});

	$(".choiceO").click(function () {
		choiceMade("O");
		setTimeout(cpuTurn.makeMove, 4000);
	});

	$(".reset").click(function () {
		game.resetScore();
	});

	// Game logic components

	function translate(num) {
		switch (num) {
			case 1:
				return "one";
				break;
			case 2:
				return "two";
				break;
			case 3:
				return "three";
				break;
			case 4:
				return "four";
				break;
			case 5:
				return "five";
				break;
			case 6:
				return "six";
				break;
			case 7:
				return "seven";
				break;
			case 8:
				return "eight";
				break;
			case 9:
				return "nine";
				break;
			default:
				return num;
		}
	}

	function chooseTile(thisGame, tileChoice) {
		console.log("chooseTile(thisGame, tileChoice)");
		console.log(thisGame.currentState.grid[tileChoice]);
		if (thisGame.currentState.grid[tileChoice] === "") {
			var newState = new State(thisGame.currentState, tileChoice);
			console.log(newState);
			console.log("game.advanceTo(newState)");
			thisGame.advanceTo(newState);
		}
	}

	function nextTurn() {
		console.log('Remaining: ' + game.currentState.getAvailableMoves().length);
		if (game.currentState.isPlayerTurn()) {
			console.log('playerTurn()');
			playerTurn();
		} else {
			setTimeout(function () {
				console.log('cpuTurn.makeMove()');
				cpuTurn.makeMove();
			}, 1000);
		}
	}

	// Player components

	function playerTurn() {
		$("button").click(function () {
			var val = parseInt($(this).val(), 10);
			console.log(game.currentState.isPlayerTurn());
			if (game.currentState.isPlayerTurn()) {
				console.log("chooseTile(game, translate(val))");
				chooseTile(game, translate(val));
			}
		});
	}

	var cpuPlayer = function (level) {
		var self = this;
		var difficulty = level;
		var chosenTile;

		function minimaxValue(state) {
			if (state.gameIsOver()) {
				if (state.checkSolutions(game.currentState.cpuToken)) {
					console.log("minimax score: " + 10 - Math.abs(state.getAvailableMoves().length - 9));
					return 10 - Math.abs(state.getAvailableMoves().length - 9);
				} else if (state.checkSolutions(game.currentState.playerToken)) {
					console.log("minimax score: " + Math.abs(state.getAvailableMoves().length - 9) - 10);
					return Math.abs(state.getAvailableMoves().length - 9) - 10;
				} else {
					console.log(state.checkSolutions(game.currentState.cpuToken));
					console.log("minimax score: " + 0);
					return 0;
				}
			} else {
				var stateScore;
				if (state.isPlayerTurn()) {
					stateScore = 100; // Higher than possible, trying to minimize
				} else {
					stateScore = -100; // Lower than possible, trying to maximize
				}
				var possibleMoves = state.getAvailableMoves();
				console.log(possibleMoves);
				var possibleNextStates = possibleMoves.map(function (pos) {
					var action = new cpuAction(translate(pos));
					console.log(action);
					var nextState = action.applyTo(state);
					console.log(nextState);
					return nextState;
				});
				console.log(possibleNextStates);
				possibleNextStates.forEach(function (nextState) {
					var nextScore = minimaxValue(nextState);
					if (state.isPlayerTurn()) {
						if (nextScore < stateScore) {
							stateScore = nextScore;
						}
					} else {
						if (nextScore > stateScore) {
							stateScore = nextScore;
						}
					}
					console.log(stateScore);
				});
				console.log(stateScore);
				return stateScore;
			}
		};

		var cpuAction = function (position) {
			var self = this;
			this.position = position;
			this.minimaxVal = 0;
			this.applyTo = function (state) {
				var next = new State(state, self.position);
				console.log(next);
				return next;
			};
			this.ascending = function (firstAction, secondAction) {
				if (firstAction.minimaxVal < secondAction.minimaxVal) {
					return -1;
				} else if (firstAction.minimaxVal > secondAction.minimaxVal) {
					return 1;
				} else {
					return 0;
				}
			};
			this.descending = function (firstAction, secondAction) {
				if (firstAction.minimaxVal > secondAction.minimaxVal) {
					return -1;
				} else if (firstAction.minimaxVal < secondAction.minimaxVal) {
					return 1;
				} else {
					return 0;
				}
			};
		};

		function easyMove() {
			var possibleMoves = game.currentState.getAvailableMoves();
			console.log(possibleMoves);
			return possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
		};

		function masterMove() {
			var possibleMoves = game.currentState.getAvailableMoves();
			var potentialMoves = possibleMoves.map(function (position) {
				var action = new cpuAction(translate(position));
				var next = action.applyTo(game.currentState);
				action.minimaxVal = minimaxValue(next);
				console.log(action);
				return action;
			});
			if (game.currentState.isPlayerTurn()) {
				potentialMoves.sort(cpuAction.ascending);
			} else {
				potentialMoves.sort(cpuAction.descending);
			}
			console.log(potentialMoves);
			var chosenAction = potentialMoves[0];
			console.log(chosenAction.position);
			return chosenAction.position;
		};
		this.makeMove = function () {
			if (game.currentState.getAvailableMoves().length === 9) {
				console.log('random tile choice');
				var startOptions = [1, 3, 5, 7, 9];
				chosenTile = startOptions[Math.floor(Math.random() * startOptions.length)];
				console.log(chosenTile);
			} else {
				switch (difficulty) {
					case "easy":
						chosenTile = easyMove();
						break;
					case "master":
						chosenTile = masterMove();
						break;
				}
			}
			console.log(chosenTile);
			chooseTile(game, translate(chosenTile));
		};
	};

	var cpuTurn = new cpuPlayer("master");

	/*
	function cpuTurn() {
		var chosenTile;
		var depth = 0;
		var choice;

		function minimaxScore(thisGame, depth) {
			if (thisGame.checkSolutions(thisGame.cpuToken)) {
				return 10 - depth;
			} else if (thisGame.checkSolutions(thisGame.playerToken)) {
				return depth - 10;
			} else {
				return 0;
			}
		}

		function minimax(thisGame, depth) {
			if (thisGame.gameIsOver()) {
				return minimaxScore(thisGame);
			} else {
				depth++;
				var scores = [];
				var moves = [];
				for (var option in thisGame.getAvailableMoves()) {
					var move = translate(option);
					var possibleGame = new State(thisGame, option);
					console.log(possibleGame);
					scores.push(minimax(possibleGame, depth));
					moves.push(option);
				}
				console.log(scores);
				console.log(moves);
				if (!thisGame.isPlayerTurn()) {
					var maxScoreIndex = scores.indexOf(Math.max(scores));
					var choice = moves[maxScoreIndex];
					return scores[maxScoreIndex];
				} else {
					var minScoreIndex = scores.indexOf(Math.min(scores));
					var choice = moves[minScoreIndex];
					return scores[minScoreIndex];
				}
			}
		}
		if (game.getAvailableMoves().length === 9) {
			console.log('random tile choice');
			var startOptions = [1, 3, 5, 7, 9];
			chosenTile = startOptions[Math.floor(Math.random() * startOptions.length)];
			console.log(chosenTile);
		} else {
			// Until minimax() is ready, randomize the available tiles
			var possibleMoves = game.getAvailableMoves();
			console.log(possibleMoves);
			//chosenTile = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
			console.log('minimax(game, depth)');
			chosenTile = minimax(game, depth);
			console.log(chosenTile);
		}
		console.log("chooseTile(translate(chosenTile))");
		chooseTile(translate(chosenTile));
	}
	*/
}

$(document).ready(function () {
	ticTacToe();
});