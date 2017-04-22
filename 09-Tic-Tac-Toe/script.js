var playerX = false;
var playerO = false;
var playerToken;
var cpuToken;
var scoreX = 0;
var scoreO = 0;
var turn = 0;

function choiceMade(choice) {
    $(".question, .choices").fadeOut(500, function() {
        $(".chosen").text("Player " + choice).fadeIn(500, function() {
            $(".choice").delay(1000).fadeOut(500, function() {
                $(".game").fadeIn(500);
                $(".question, .choices").css("display", "block");
                $(".chosen").css("display","none");
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
    $(".game").fadeOut(500, function() {
        $("td").text("");
        $(".choice").fadeIn(500);
    });
}

function resetScore() {
    scoreX = 0;
    scoreO = 0;
    reset();
}

$(document).ready(function() {
    $("span.X").click(function() {
        choiceMade("X");
    });
    $("span.O").click(function() {
        choiceMade("O");
    });
    $(".reset").click(function() {
        resetScore();
    });
});