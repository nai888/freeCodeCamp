var playerX = false;
var playerO = false;

function choiceMade(choice) {
    $(".choice").addClass("no-show");
    $(".game").removeClass("no-show");
    if (choice === "X") {
        playerX = true;
    } else if (choice === "O") {
        playerO = true;
    }
}

$(document).ready(function() {
    $("span.X").click(function() {
        choiceMade("X");
    });
    $("span.O").click(function() {
        choiceMade("O");
    });
});