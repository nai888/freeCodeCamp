function ticTacToe() {
    var playerToken = "";
    var cpuToken = "";
    var playerScore = 0;
    var cpuScore = 0;
    var turn = 0;
    var isPlayerTurn = false;
    var one = "";
    var two = "";
    var three = "";
    var four = "";
    var five = "";
    var six = "";
    var seven = "";
    var eight = "";
    var nine = "";

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

    function choiceMade(choice) {
        if (choice === "X") {
            playerToken = "X";
            cpuToken = "O";
        } else if (choice === "O") {
            playerToken = "O";
            cpuToken = "X";
        }
        $(".question, .choices").fadeOut(500, function () {
            $(".chosen").text("Player " + choice).fadeIn(500, function () {
                $(".choice").delay(1000).fadeOut(500, function () {
                    $(".game, .score, .gamegrid").fadeIn(500, function () {
                        $(".question, .choices").css("display", "block");
                        $(".chosen").css("display", "none");
                    });
                });
            });
        });
    }

    function updateGrid() {
        $("button.one").text(one);
        $("button.two").text(two);
        $("button.three").text(three);
        $("button.four").text(four);
        $("button.five").text(five);
        $("button.six").text(six);
        $("button.seven").text(seven);
        $("button.eight").text(eight);
        $("button.nine").text(nine);
    }

    function nextTurn() {
        console.log('Turn: ' + turn);
        if ((turn % 2 === 0 && playerToken === "X") || (turn % 2 !== 0 && playerToken === "O")) {
            console.log('playerTurn()');
            playerTurn();
        } else {
            setTimeout(function () {
                console.log('cpuTurn()');
                cpuTurn();
            }, 1000);
        }
    }

    function playerTurn() {
        isPlayerTurn = true;

        function nextStep() {
            isPlayerTurn = false;
            updateGrid();
            turn++;
            if (turn >= 5) {
                console.log('checkForWinner()');
                checkForWinner();
            } else {
                console.log('nextTurn()');
                nextTurn();
            }
        }

        $("button.one").click(function () {
            if (one === "" && isPlayerTurn) {
                one = playerToken;
                nextStep();
            }
        });
        $("button.two").click(function () {
            if (two === "" && isPlayerTurn) {
                two = playerToken;
                nextStep();
            }
        });
        $("button.three").click(function () {
            if (three === "" && isPlayerTurn) {
                three = playerToken;
                nextStep();
            }
        });
        $("button.four").click(function () {
            if (four === "" && isPlayerTurn) {
                four = playerToken;
                nextStep();
            }
        });
        $("button.five").click(function () {
            if (five === "" && isPlayerTurn) {
                five = playerToken;
                nextStep();
            }
        });
        $("button.six").click(function () {
            if (six === "" && isPlayerTurn) {
                six = playerToken;
                nextStep();
            }
        });
        $("button.seven").click(function () {
            if (seven === "" && isPlayerTurn) {
                seven = playerToken;
                nextStep();
            }
        });
        $("button.eight").click(function () {
            if (eight === "" && isPlayerTurn) {
                eight = playerToken;
                nextStep();
            }
        });
        $("button.nine").click(function () {
            if (nine === "" && isPlayerTurn) {
                nine = playerToken;
                nextStep();
            }
        });
    }

    function cpuTurn() {
        var tileChoice;
        if (turn === 0) {
            console.log('random tile choice');
            tileChoice = [1, 3, 5, 7, 9][Math.floor(Math.random() * 5) + 1];
            console.log(tileChoice);
        } else {
            console.log('strategic tile choice');
        }
        switch (tileChoice) {
            case 1:
                one = cpuToken;
                break;
            case 2:
                two = cpuToken;
                break;
            case 3:
                three = cpuToken;
                break;
            case 4:
                four = cpuToken;
                break;
            case 5:
                five = cpuToken;
                break;
            case 6:
                six = cpuToken;
                break;
            case 7:
                seven = cpuToken;
                break;
            case 8:
                eight = cpuToken;
                break;
            case 9:
                nine = cpuToken;
                break;
        }
        updateGrid();
        turn++;
        if (turn >= 5) {
            console.log('checkForWinner()');
            checkForWinner();
        } else {
            console.log('nextTurn()');
            nextTurn();
        }
    }

    function checkForWinner() {
        var tie = false;

        function checkSolutions(player) {
            if (one === player && two === player && three === player) {
                return true;
            } else if (four === player && five === player && six === player) {
                return true;
            } else if (seven === player && eight === player && nine === player) {
                return true;
            } else if (one === player && four === player && seven === player) {
                return true;
            } else if (two === player && five === player && eight === player) {
                return true;
            } else if (three === player && six === player && nine === player) {
                return true;
            } else if (one === player && five === player && nine === player) {
                return true;
            } else if (three === player && five === player && seven === player) {
                return true;
            } else {
                return false;
            }
        }
        if (checkSolutions(playerToken)) {
            console.log('player win');
            playerScore += 1;
            console.log('showWinner(playerToken)');
            showWinner(playerToken);
        } else if (checkSolutions(cpuToken)) {
            console.log('cpu win');
            cpuScore += 1;
            console.log('showWinner()cpuToken)');
            showWinner(cpuToken);
        } else if (turn === 9) {
            console.log('tie');
            tie = true;
            console.log('showWinner("tie")');
            showWinner("tie");
        } else {
            console.log('nextTurn()');
            nextTurn();
        }
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

    function updateScore() {
        $(".player-score").text(playerScore);
        $(".cpu-score").text(cpuScore);
    }

    function reset() {
        turn = 0;
        one = "";
        two = "";
        three = "";
        four = "";
        five = "";
        six = "";
        seven = "";
        eight = "";
        nine = "";
        $(".game, .score").fadeOut(500, function () {
            updateGrid();
            $(".winner").text("");
            $(".choice").fadeIn(500);
        });
    }

    $(".reset").click(function () {
        console.log('resetScore()');
        resetScore();
    });

    function resetScore() {
        scoreX = 0;
        scoreO = 0;
        console.log('updateScore()');
        updateScore();
        console.log('reset()');
        reset();
    }
}

$(document).ready(function () {
    ticTacToe();
});