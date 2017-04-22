function ticTacToe() {
    var playerX = false;
    var playerO = false;
    var playerToken;
    var cpuToken;
    var scoreX = 0;
    var scoreO = 0;
    var turn = 0;

    $(".choiceX").click(function () {
        choiceMade("X");
    });

    $(".choiceO").click(function () {
        choiceMade("O");
    });

    function choiceMade(choice) {
        $(".question, .choices").fadeOut(500, function () {
            $(".chosen").text("Player " + choice).fadeIn(500, function () {
                $(".choice").delay(1000).fadeOut(500, function () {
                    $(".game").fadeIn(500);
                    $(".question, .choices").css("display", "block");
                    $(".chosen").css("display", "none");
                });
            });
        });
        if (choice === "X") {
            playerX = true;
            playerToken = "X";
            cpuToken = "O";
        } else if (choice === "O") {
            playerO = true;
            playerToken = "O";
            cpuToken = "X";
        }
    }

    function reset() {
        playerX = false;
        playerO = false;
        $(".game").fadeOut(500, function () {
            $("td").text("");
            $(".choice").fadeIn(500);
        });
    }

    $(".reset").click(function () {
        resetScore();
    });

    function resetScore() {
        scoreX = 0;
        scoreO = 0;
        updateScore();
        reset();
    }

    function checkForWinner() {
        function checkSolutions(player) {
            if ($(".one").text() === player && $(".two").text() === player && $(".three").text() === player) {
                return true;
            } else if ($(".four").text() === player && $(".five").text() === player && $(".six").text() === player) {
                return true;
            } else if ($(".seven").text() === player && $(".eight").text() === player && $(".nine").text() === player) {
                return true;
            } else if ($(".one").text() === player && $(".four").text() === player && $(".seven").text() === player) {
                return true;
            } else if ($(".two").text() === player && $(".five").text() === player && $(".eight").text() === player) {
                return true;
            } else if ($(".three").text() === player && $(".six").text() === player && $(".nine").text() === player) {
                return true;
            } else if ($(".one").text() === player && $(".five").text() === player && $(".nine").text() === player) {
                return true;
            } else if ($(".three").text() === player && $(".five").text() === player && $(".seven").text() === player) {
                return true;
            } else {
                return false;
            }
        }
        if (checkSolutions("X")) {
            scoreX += 1;
            showWinner("X");
        } else if (checkSolutions("O")) {
            scoreO += 1;
            showWinner("O");
        }
        updateScore();
    }

    function showWinner(winner) {
        $(".gamegrid").fadeOut(500, function () {
            $(".player").text(winner);
            $(".winner").fadeIn(500).delay(1000).fadeOut(500, function () {
                reset();
            });
        });
    }

    function updateScore() {
        $(".scoreX").text(scoreX);
        $(".scoreO").text(scoreO);
    }
}

$(document).ready(function () {
    ticTacToe();
});