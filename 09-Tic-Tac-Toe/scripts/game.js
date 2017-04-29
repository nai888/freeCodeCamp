var State = function (old) {
	var self = this;
	this.human = ""; // human token
	this.cpu = ""; // cpu token
	this.turn = ""; // whose turn is it in this state?
	this.humanScore = 0;
	this.cpuScore = 0;
	this.moves = 0; // how many moves have been made?
	this.result = "still running"; // what is the state of the state?
	this.board = ["", "", "", "", "", "", "", "", ""]; // the board
	if (typeof old !== "undefined") { // inherit information from the old state
		self.board = new Array(old.board.length);
		for (let i = 0; i < old.board.length; i++) {
			self.board[i] = old.board[i];
		}
		self.human = old.human;
		self.cpu = old.cpu;
		self.turn = old.turn;
		self.humanScore = old.humanScore;
		self.cpuScore = old.cpuScore;
		self.moves = old.moves;
		self.result = old.result;
	}
	this.advanceTurn = function () { // advance to the next token's turn
		self.turn = self.turn === "X" ? "O" : "X";
	};
	this.openCells = function () { // which cells are available?
		var cells = [];
		for (let i = 0; i < 9; i++) {
			if (self.board[i] === "") {
				cells.push(i);
			}
		}
		return cells;
	};
	this.isTerminal = function () { // is the game over in this state?
		var b = self.board;
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
		if (winner === self.human) {
			self.result = "human won";
			self.humanScore++;
			return true;
		} else if (winner === self.cpu) {
			self.result = "cpu won";
			self.cpuScore++;
			return true;
		} else {
			var open = self.openCells();
			if (open.length === 0) {
				self.result = "tie";
				return true;
			} else { // game is not over in this state
				return false;
			}
		}
	};
};

var Game = function (aiPlayer) {
	var self = this;
	this.ai = aiPlayer; // AI object
	this.currentState = new State();
	this.currentState.turn = "X"; // X always starts
	this.status = "start";
	this.advanceTo = function (_state) {
		self.currentState = _state;
		if (_state.isTerminal()) {
			self.status = "end";
			ui.switchViewTo(_state.result); // show end-game view
			setTimeout(control.reset, 500);
		} else {
			if (self.currentState.turn === self.currentState.human) {
				ui.switchViewTo("human"); // enable human player to take turn
			} else {
				ui.switchViewTo("cpu");
				setTimeout(self.ai.makeMove, 1000);
			}
		}
	};
	this.startGame = function (choice) {
		if (self.status = "start") {
			self.status = "running";
			self.currentState.human = choice;
			if (choice === "X") {
				self.currentState.cpu = "O";
			} else {
				self.currentState.cpu = "X";
			}

			self.advanceTo(self.currentState);
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
		}
	};
};