var State = function (old) {
	this.human = ""; // human token
	this.cpu = ""; // cpu token
	this.turn = ""; // whose turn is it in this state?
	this.humanScore = 0;
	this.cpuScore = 0;
	this.moves = 0; // how many moves have been made?
	this.result = "still running"; // what is the state of the state?
	this.board = ["", "", "", "", "", "", "", "", ""]; // the board
	if (typeof old !== "undefined") { // inherit information from the old state
		this.board = new Array(old.board.length);
		for (let i = 0; i < old.board.length; i++) {
			this.board[i] = old.board[i];
		}
		this.human = old.human;
		this.cpu = old.cpu;
		this.turn = old.turn;
		this.humanScore = old.humanScore;
		this.cpuScore = old.cpuScore;
		this.moves = old.moves;
		this.result = old.result;
	}
	this.advanceTurn = function () { // advance to the next token's turn
		this.turn = this.turn === "X" ? "O" : "X";
	};
	this.openCells = function () { // which cells are available?
		var cells = [];
		for (let i = 0; i < 9; i++) {
			if (this.board[i] === "") {
				cells.push(i);
			}
		}
		return cells;
	};
	this.isTerminal = function () { // is the game over in this state?
		var b = this.board;
		var winner = undefined;
		for (let i = 0; i <= 6; i += 3) { // check rows
			if (b[i] !== "" && b[i] === b[i + 1] && b[i] === b[i + 2]) {
				winner = b[i];
			}
		}
		for (let i = 0; i <= 2; i++) { // check columns
			if (b[i] !== "" && b[i] === b[i + 3] && b[i] === b[i + 6]) {
				winner = b[i];
			}
		}
		for (let i = 0, j = 4; i <= 2; i += 2, j -= 2) { // check diagonals
			if (b[i] !== "" && b[i] === b[i + j] && b[i] === b[i + (2 * j)]) {
				winner = b[i];
			}
		}
		if (winner === this.human) {
			this.result = "human won";
			this.humanScore++;
			return true;
		} else if (winner === this.cpu) {
			this.result = "cpu won";
			this.cpuScore++;
			return true;
		} else {
			var open = this.openCells();
			if (open.length === 0) {
				this.result = "tie";
				return true;
			} else { // game is not over in this state
				return false;
			}
		}
	};
};

var Game = function (aiPlayer) {
	this.ai = aiPlayer; // AI object
	this.currentState = new State();
	this.currentState.turn = "X"; // X always starts
	this.status = "start";
	this.advanceTo = function (_state) {
		this.currentState = _state;
		if (_state.isTerminal()) {
			this.status = "end";
			ui.switchViewTo(_state.result); // show end-game view
		} else {
			if (this.currentState.turn === this.currentState.human) {
				ui.switchViewTo("human"); // enable human player to take turn
			} else {
				ui.switchViewTo("cpu");
				setTimeout(function () {
					this.ai.makeMove();
				}, 1000);
			}
		}
	};
	this.startGame = function (choice) {
		if (this.status = "start") {
			this.advanceTo(this.currentState);
			this.status = "running";
			this.currentState.human = choice;
			if (choice === "X") {
				this.currentState.cpu = "O";
			} else {
				this.currentState.cpu = "X";
			}
		}
	};
	this.score = function (_state) {
		switch (_state.result) {
			case "human won":
				return 10 - _state.moves;
				break;
			case "cpu won":
				return _state.moves - 10;
				break;
			case "tie":
				return 0;
				break;
			default:
				continue;
		}
	};
};