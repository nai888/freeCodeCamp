function human() {
	$(".view").on("click", "td", function () {
		var val = parseInt($(this).data("val"), 10);
		if (control.game.currentState.result === "still running" && control.game.currentState.turn === control.game.currentState.human && control.game.currentState.board[val] === "") {
			var chosenAction = new Action(val);
			var next = chosenAction.applyTo(control.game.currentState);
			ui.insertAt(chosenAction.movePosition, control.game.currentState.human);
			control.game.advanceTo(next);
		}
	});
}

var AI = function (level) {
	var intelligence = level;
	var game = {};

	function minimaxValue(state) {
		if (state.isTerminal()) {
			return game.score(state);
		} else {
			var stateScore;
			if (state.turn === state.human) {
				stateScore = -100; // human is maximizing, initialize lower than possible
			} else {
				stateScore = 100; // cpu is minimizing, initialize higher than possible
			}
			var availableMoves = state.openCells();
			var availableNextStates = availableMoves.map(function (pos) {
				var action = new Action(pos);
				var nextState = action.applyTo(state);
				return nextState;
			});
			availableNextStates.forEach(function (nextState) {
				nextScore = minimaxValue(nextState);
				if (state.turn === state.human) {
					if (nextScore > stateScore) { // human is maximizing
						stateScore = nextScore;
					}
				} else {
					if (nextScore < stateScore) { // cpu is minimizing
						stateScore = nextScore;
					}
				}
			});
			return stateScore;
		}
	}
	this.plays = function (_game) {
		game = _game;
	};
	this.makeMove = function () {
		var chosenAction;
		if (game.currentState.moves === 0) {
			var startingMoves = [0, 2, 4, 6, 8];
			chosenAction = new Action(startingMoves[Math.floor(Math.random() * startingMoves.length)]);
		} else {
			var availableMoves = game.currentState.openCells();
			var x = 0;
			var availableNextStates = availableMoves.map(function (pos) {
				var action = new Action(pos);
				var nextState = action.applyTo(game.currentState);
				action.minimaxVal = minimaxValue(nextState);
				x++;
				return action;
			});
			if (game.currentState.turn === game.currentState.cpu) {
				availableNextStates.sort(function (first, second) {
					var result = first.minimaxVal - second.minimaxVal;
					if (result === 0) {
						result = Math.floor(Math.random()) * 2 - 1;
					}
					return result;
				});
			} else {
				availableNextStates.sort(function (first, second) {
					var result = second.minimaxVal - first.minimaxVal;
					if (result === 0) {
						result = Math.floor(Math.random()) * 2 - 1;
					}
					return result;
				});
			}
			availableNextStates.forEach(function (action) {});
			switch (intelligence) {
				case "blind":
					chosenAction = availableNextStates[Math.floor(Math.random() * availableMoves.length)];
					break;
				case "novice":
					if (Math.random() * 100 >= 60 || availableNextStates.length <= 3) {
						chosenAction = availableNextStates[0];
					} else if (Math.random() * 100 >= 20 || availableNextStates.length <= 5) {
						chosenAction = availableNextStates[1];
					} else {
						chosenAction = availableNextStates[2];
					}
					break;
				case "challenging":
					if (Math.random() * 100 >= 40 || availableNextStates.length <= 4) {
						chosenAction = availableNextStates[0];
					} else {
						chosenAction = availableNextStates[1];
					}
					break;
				case "master":
					chosenAction = availableNextStates[0];
					break;
			}
		}
		var next = chosenAction.applyTo(game.currentState);
		ui.insertAt(chosenAction.movePosition, game.currentState.cpu);
		game.advanceTo(next);
	};
};
var Action = function (pos) {
	var self = this;
	this.movePosition = pos;
	this.minimaxVal = 0;
	this.applyTo = function (state) {
		var next = new State(state);
		next.board[self.movePosition] = state.turn;
		next.moves++;
		next.advanceTurn();
		return next;
	};
};