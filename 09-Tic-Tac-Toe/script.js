function ticTacToe() {
    var playerX = false;
    var playerO = false;
    var playerToken = "";
    var cpuToken = "";
    var playerScore = 0;
    var cpuScore = 0;
    var turn = 0;
    var isPlayerTurn = false;

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
            playerX = true;
            playerToken = "X";
            cpuToken = "O";
        } else if (choice === "O") {
            playerO = true;
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

    function nextTurn() {
        console.log('Turn: ' + turn);
        if ((turn % 2 === 0 && playerX) || (turn % 2 !== 0 && playerO)) {
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
            if ($("button.one").text() === "" && isPlayerTurn) {
                $("button.one").text(playerToken);
                nextStep();
            }
        });
        $("button.two").click(function () {
            if ($("button.two").text() === "" && isPlayerTurn) {
                $("button.two").text(playerToken);
                nextStep();
            }
        });
        $("button.three").click(function () {
            if ($("button.three").text() === "" && isPlayerTurn) {
                $("button.three").text(playerToken);
                nextStep();
            }
        });
        $("button.four").click(function () {
            if ($("button.four").text() === "" && isPlayerTurn) {
                $("button.four").text(playerToken);
                nextStep();
            }
        });
        $("button.five").click(function () {
            if ($("button.five").text() === "" && isPlayerTurn) {
                $("button.five").text(playerToken);
                nextStep();
            }
        });
        $("button.six").click(function () {
            if ($("button.six").text() === "" && isPlayerTurn) {
                $("button.six").text(playerToken);
                nextStep();
            }
        });
        $("button.seven").click(function () {
            if ($("button.seven").text() === "" && isPlayerTurn) {
                $("button.seven").text(playerToken);
                nextStep();
            }
        });
        $("button.eight").click(function () {
            if ($("button.eight").text() === "" && isPlayerTurn) {
                $("button.eight").text(playerToken);
                nextStep();
            }
        });
        $("button.nine").click(function () {
            if ($("button.nine").text() === "" && isPlayerTurn) {
                $("button.nine").text(playerToken);
                nextStep();
            }
        });
    }

    function cpuTurn() {
        var tileChoice;
        if (turn === 0) {
            console.log('random tile choice');
            tileChoice = Math.floor(Math.random() * 9) + 1;
            console.log(tileChoice);
        } else {
            console.log('strategic tile choice');
        }
        switch (tileChoice) {
            case 1:
                $("button.one").text(cpuToken);
                break;
            case 2:
                $("button.two").text(cpuToken);
                break;
            case 3:
                $("button.three").text(cpuToken);
                break;
            case 4:
                $("button.four").text(cpuToken);
                break;
            case 5:
                $("button.five").text(cpuToken);
                break;
            case 6:
                $("button.six").text(cpuToken);
                break;
            case 7:
                $("button.seven").text(cpuToken);
                break;
            case 8:
                $("button.eight").text(cpuToken);
                break;
            case 9:
                $("button.nine").text(cpuToken);
                break;
        }
        turn++;
        console.log('Now turn: ' + turn);
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
            if ($("button.one").text() === player && $("button.two").text() === player && $("button.three").text() === player) {
                return true;
            } else if ($("button.four").text() === player && $("button.five").text() === player && $("button.six").text() === player) {
                return true;
            } else if ($("button.seven").text() === player && $("button.eight").text() === player && $("button.nine").text() === player) {
                return true;
            } else if ($("button.one").text() === player && $("button.four").text() === player && $("button.seven").text() === player) {
                return true;
            } else if ($("button.two").text() === player && $("button.five").text() === player && $("button.eight").text() === player) {
                return true;
            } else if ($("button.three").text() === player && $("button.six").text() === player && $("button.nine").text() === player) {
                return true;
            } else if ($("button.one").text() === player && $("button.five").text() === player && $("button.nine").text() === player) {
                return true;
            } else if ($("button.three").text() === player && $("button.five").text() === player && $("button.seven").text() === player) {
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
        playerX = false;
        playerO = false;
        turn = 0;
        $(".game, .score").fadeOut(500, function () {
            $("button").text("");
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