var human = function () {
	var game = {}
	this.plays = function (_game) {
		game = _game;
	};
	$("button").click(function () {
		var val = parseInt($(this).val(), 10) - 1;
		if (game.currentState.turn === game.currentState.human && game.currentState.board[val] === "") {
			var chosenAction = new Action(val);
			var next = chosenAction.applyTo(game.currentState);
			ui.insertAt(chosenAction.movePosition, game.currentState.human);
			game.advanceTo(next);
		}
	});
};

var AI = function (level) {
	var intelligence = level;
	var game = {};

	function minimaxValue(state) {
		if (state.isTerminal()) {
			return Game.score(state);
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
		var availableMoves = game.currentState.openCells();
		var availableNextStates = availableMoves.map(function (pos) {
			var action = new Action(pos);
			var nextState = action.applyTo(game.currentState);
			action.minimaxVal = minimaxValue(nextState);
			return action;
		});
		if (game.currentState.turn === game.currentState.human) {
			availableNextStates.sort(Action.descending); // maximizing, highest first
		} else {
			availableNextStates.sort(Action.ascending); // minimizing, lowest first
		}
		var chosenAction;
		switch (intelligence) {
			case "blind":
				chosenAction = availableNextStates[Math.floor(Math.random() * availableMoves.length)];
				break;
			case "novice":
				if (Math.random() * 100 >= 60 || availableNextStates.length < 2) {
					chosenAction = availableNextStates[0];
				} else if (Math.random() * 100 >= 20 || availableNextStates.length < 3) {
					chosenAction = availableNextStates[1];
				} else {
					chosenAction = availableNextStates[2];
				}
				break;
			case "challenging":
				if (Math.random() * 100 >= 35 || availableNextStates.length < 2) {
					chosenAction = availableNextStates[0];
				} else {
					chosenAction = availableNextStates[1];
				}
				break;
			case "master":
				chosenAction = availableNextStates[0];
				break;
		}
		var next = chosenAction.applyTo(game.currentState);
		ui.insertAt(chosenAction.movePosition, game.currentState.cpu);
		game.advanceTo(next);
	};
};

var Action = function (pos) {
	this.movePosition = pos;
	this.minimaxVal = 0;
	this.applyTo = function (state) {
		var next = new State(state);
		next.board[this.movePosition] = state.turn;
		next.moves++;
		next.advanceTurn();
		return next;
	};
	this.ascending = function (firstAction, secondAction) { // sorts low to high
		if (firstAction.minimaxVal < secondAction.minimaxVal) {
			return -1;
		} else if (firstAction.minimaxVal > secondAction.minimaxVal) {
			return 1;
		} else {
			return 0;
		}
	};
	this.descending = function (firstAction, secondAction) { // sorts high to low
		if (firstAction.minimaxVal < secondAction.minimaxVal) {
			return 1;
		} else if (firstAction.minimaxVal > secondAction.minimaxVal) {
			return -1;
		} else {
			return 0;
		}
	};
};