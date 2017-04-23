function ticTacToe() {

    // Game Initialization

    var gameObject = function () {
        this.grid = {
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
        this.cleanGrid = function () {
            this.grid = {
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
        this.playerToken = "";
        this.cpuToken = "";
        this.playerScore = 0;
        this.cpuScore = 0;
        this.turn = 0;
        this.isPlayerTurn = false;
        var self = this;
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
        this.getNewState = function (move, token) {
            var newState = this;
            newState.grid[move] = token;
            return newState;
        };
    }
    var game = new gameObject;

    // View Logic

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
                console.log('reset()');
                reset();
            });
        });
        console.log('updateScore()');
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

    // Operational Logic

    function choiceMade(choice) {
        if (choice === "X") {
            game.playerToken = "X";
            game.cpuToken = "O";
        } else if (choice === "O") {
            game.playerToken = "O";
            game.cpuToken = "X";
        }
        console.log("choiceMadeView()");
        choiceMadeView();
    }

    $(".choiceX").click(function () {
        console.log('choiceMade("X")');
        choiceMade("X");
        console.log('playerTurn()')
        playerTurn();
    });

    $(".choiceO").click(function () {
        console.log('choiceMade("O")');
        choiceMade("O");
        console.log('cpuTurn()')
        setTimeout(cpuTurn, 4000);
    });

    function reset() {
        game.cleanGrid();
        game.playerToken = "";
        game.cpuToken = "";
        game.turn = 0;
        game.isPlayerTurn = false;
        $(".game, .score").fadeOut(500, function () {
            updateGrid();
            $(".winner").text("");
            $(".choice").fadeIn(500);
        });
    }

    function resetScore() {
        game.playerScore = 0;
        game.cpuScore = 0;
        console.log('updateScore()');
        updateScore();
        console.log('reset()');
        reset();
    }

    $(".reset").click(function () {
        console.log('resetScore()');
        resetScore();
    });

    // Game Logic

    function chooseTile(tileChoice, player) {
        switch (tileChoice) {
            case 1:
                if (game.grid.one === "") {
                    game.grid.one = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 2:
                if (game.grid.two === "") {
                    game.grid.two = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 3:
                if (game.grid.three === "") {
                    game.grid.three = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 4:
                if (game.grid.four === "") {
                    game.grid.four = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 5:
                if (game.grid.five === "") {
                    game.grid.five = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 6:
                if (game.grid.six === "") {
                    game.grid.six = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 7:
                if (game.grid.seven === "") {
                    game.grid.seven = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 8:
                if (game.grid.eight === "") {
                    game.grid.eight = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
            case 9:
                if (game.grid.nine === "") {
                    game.grid.nine = player;
                    console.log("nextStep()");
                    nextStep();
                }
                break;
        }
    }

    function nextStep() {
        game.isPlayerTurn = false;
        console.log("updateGrid()");
        updateGrid();
        game.turn++;
        if (game.turn >= 5) {
            console.log('checkForWinner()');
            checkForWinner();
        } else {
            console.log('nextTurn()');
            nextTurn();
        }
    }

    function nextTurn() {
        console.log('Turn: ' + game.turn);
        if ((game.turn % 2 === 0 && game.playerToken === "X") || (game.turn % 2 !== 0 && game.playerToken === "O")) {
            console.log('playerTurn()');
            playerTurn();
        } else {
            setTimeout(function () {
                console.log('cpuTurn()');
                cpuTurn();
            }, 1000);
        }
    }

    function checkForWinner() {
        if (checkSolutions(game, game.playerToken)) {
            console.log('player win');
            game.playerScore += 1;
            console.log('showWinner(game.playerToken)');
            showWinner(game.playerToken);
        } else if (checkSolutions(game, game.cpuToken)) {
            console.log('cpu win');
            game.cpuScore += 1;
            console.log('showWinner(game.cpuToken)');
            showWinner(game.cpuToken);
        } else if (game.turn === 9) {
            console.log('showWinner("tie")');
            showWinner("tie");
        } else {
            console.log('nextTurn()');
            nextTurn();
        }
    }

    function checkSolutions(thisGame, player) {
        if (thisGame.grid.one === player && thisGame.grid.two === player && thisGame.grid.three === player) {
            return true;
        } else if (thisGame.grid.four === player && thisGame.grid.five === player && thisGame.grid.six === player) {
            return true;
        } else if (thisGame.grid.seven === player && thisGame.grid.eight === player && thisGame.grid.nine === player) {
            return true;
        } else if (thisGame.grid.one === player && thisGame.grid.four === player && thisGame.grid.seven === player) {
            return true;
        } else if (thisGame.grid.two === player && thisGame.grid.five === player && thisGame.grid.eight === player) {
            return true;
        } else if (thisGame.grid.three === player && thisGame.grid.six === player && thisGame.grid.nine === player) {
            return true;
        } else if (thisGame.grid.one === player && thisGame.grid.five === player && thisGame.grid.nine === player) {
            return true;
        } else if (thisGame.grid.three === player && thisGame.grid.five === player && thisGame.grid.seven === player) {
            return true;
        } else {
            return false;
        }
    }

    function gameIsOver(thisGame) {
        if (checkSolutions(thisGame, thisGame.cpuToken) || checkSolutions(thisGame, thisGame.playerToken) || thisGame.turn >= 9) {
            return true;
        } else {
            return false;
        }
    }

    // Player Logic

    function playerTurn() {
        game.isPlayerTurn = true;
        $("button").click(function () {
            var val = parseInt($(this).val(), 10);
            if (game.isPlayerTurn) {
                console.log("chooseTile(val, game.playerToken)");
                chooseTile(val, game.playerToken);
            }
        });
    }

    function cpuTurn() {
        var chosenTile;
        var depth = 0;
        var thisTurn = game.turn;

        function minimaxScore(thisGame, depth) {
            if (checkSolutions(thisGame, thisGame.cpuToken)) {
                return 10 - depth;
            } else if (checkSolutions(thisGame, thisGame.playerToken)) {
                return depth - 10;
            } else {
                return 0;
            }
        }

        function minimax(thisGame, depth) {
            if (gameIsOver(thisGame)) {
                return score(thisGame, depth);
            } else {
                depth += 1;
                var scores = [];
                var moves = [];
                for (var move in thisGame.getAvailableMoves) {
                    var possibleGame = game.getNewState(move);
                    scores.push(minimax(possibleGame, depth));
                    moves.push(move);
                }
                if (!game.isPlayerTurn) {
                    var maxScoreIndex = scores.indexOf(Math.max(scores));

                }
            }
        }
        if (game.turn === 0) {
            console.log('random tile choice');
            var startOptions = [1, 3, 5, 7, 9];
            chosenTile = startOptions[Math.floor(Math.random() * startOptions.length)];
            console.log(chosenTile);
        } else {
            console.log('minimax(game, depth, cpuToken)');
            var possibleMoves = game.getAvailableMoves();
            console.log(possibleMoves);
            chosenTile = possibleMoves[Math.floor(Math.random() * possibleMoves.length)];
            console.log(chosenTile);
            // minimax(game, depth, game.cpuToken);
        }
        console.log("chooseTile(chosenTile, game.cpuToken)");
        chooseTile(chosenTile, game.cpuToken);
    }
}

$(document).ready(function () {
    ticTacToe();
});