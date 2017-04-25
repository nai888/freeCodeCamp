function ticTacToe() {

    // Game Initialization

    var State = function (oldState, move) {
        var self = this;
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
            self.playerToken = "";
            self.cpuToken = "";
            self.playerScore = 0;
            self.cpuScore = 0;
        } else {
            self.grid = oldState.grid;
            self.playerToken = oldState.playerToken;
            self.cpuToken = oldState.cpuToken;
            self.playerScore = oldState.playerScore;
            self.cpuScore = oldState.cpuScore;
            if (oldState.isPlayerTurn()) {
                self.grid[move] = self.playerToken;
            } else {
                self.grid[move] = self.cpuToken;
            }
        }
        this.cleanGrid = function () {
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
            }
        };
        this.isPlayerTurn = function() {
            if ((self.getAvailableMoves().length % 2 !== 0 && self.playerToken === "X") || (self.getAvailableMoves().length % 2 === 0 && self.playerToken === "O")) {
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
                return true;
            } else {
                return false;
            }
        };
        this.recordWinner = function () {
            if (self.checkSolutions(self.playerToken)) {
                console.log('player win');
                self.playerScore += 1;
                console.log('showWinner(game.playerToken)');
                showWinner(self.playerToken);
            } else if (self.checkSolutions(self.cpuToken)) {
                console.log('cpu win');
                self.cpuScore += 1;
                console.log('showWinner(game.cpuToken)');
                showWinner(self.cpuToken);
            } else if (self.getAvailableMoves().length < 1) {
                console.log('showWinner("tie")');
                showWinner("tie");
            }
        }
    }
    var game = new State();

    // View components

    function choiceMadeView() {
        $(".question, .choices").fadeOut(500, function () {
            $(".chosen").text("Player " + game.playerToken).fadeIn(500, function () {
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
                reset();
            });
        });
        updateScore();
    }

    function updateGrid() {
        $("button.one").text(game.grid.one);
        $("button.two").text(game.grid.two);
        $("button.three").text(game.grid.three);
        $("button.four").text(game.grid.four);
        $("button.five").text(game.grid.five);
        $("button.six").text(game.grid.six);
        $("button.seven").text(game.grid.seven);
        $("button.eight").text(game.grid.eight);
        $("button.nine").text(game.grid.nine);
    }

    function updateScore() {
        $(".player-score").text(game.playerScore);
        $(".cpu-score").text(game.cpuScore);
    }

    // Operational components

    function choiceMade(choice) {
        if (choice === "X") {
            game.playerToken = "X";
            game.cpuToken = "O";
        } else if (choice === "O") {
            game.playerToken = "O";
            game.cpuToken = "X";
        }
        choiceMadeView();
    }

    $(".choiceX").click(function () {
        choiceMade("X");
        playerTurn();
    });

    $(".choiceO").click(function () {
        choiceMade("O");
        setTimeout(cpuTurn, 4000);
    });

    function reset() {
        game.cleanGrid();
        game.playerToken = "";
        game.cpuToken = "";
        $(".game").fadeOut(500, function () {
            updateGrid();
            $(".winner").text("");
            $(".choice").fadeIn(500);
        });
    }

    function resetScore() {
        game.playerScore = 0;
        game.cpuScore = 0;
        updateScore();
        reset();
    }

    $(".reset").click(function () {
        resetScore();
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
                break
            case 9:
                return "nine";
                break;
        }
    }

    function chooseTile(tileChoice) {
        if (game.grid[tileChoice] === "") {
            console.log("game = new State(game, tileChoice)");
            game = new State(game, tileChoice);
            console.log("nextStep()");
            nextStep();
        }
    }

    function nextStep() {
        updateGrid();
        if (game.gameIsOver()) {
            console.log('game.recordWinner()');
            game.recordWinner();
        } else {
            console.log('nextTurn()');
            nextTurn();
        }
    }

    function nextTurn() {
        console.log('Remaining: ' + game.getAvailableMoves().length);
        if (game.isPlayerTurn()) {
            console.log('playerTurn()');
            playerTurn();
        } else {
            setTimeout(function () {
                console.log('cpuTurn()');
                cpuTurn();
            }, 1000);
        }
    }

    // Player components

    function playerTurn() {
        $("button").click(function () {
            var val = parseInt($(this).val(), 10);
            if (game.isPlayerTurn()) {
                console.log("chooseTile(translate(val))");
                chooseTile(translate(val));
            }
        });
    }

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
                for (var move in thisGame.getAvailableMoves()) { // need to translate available moves from digits to words
                    var possibleGame = new State(move);
                    console.log(possibleGame);
                    scores.push(minimax(possibleGame, depth));
                    moves.push(move);
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
            chosenTile = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            console.log('minimax(game, depth)');
            //chosenTile = minimax(game, depth);
            console.log(chosenTile);
        }
        console.log("chooseTile(translate(chosenTile))");
        chooseTile(translate(chosenTile));
    }
}

$(document).ready(function () {
    ticTacToe();
});