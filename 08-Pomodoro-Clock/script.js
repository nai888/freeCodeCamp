var mins = 25;
var secs = 0;
var remMins = mins;
var remSecs = secs;
var running = false;

function runTimer() {
    running = true;
    var startTime = Date.now();
    var countDown = setInterval(function () {
        var now = Date.now();
        var distance = startTime - now;

    }, 1000);
}

$(document).ready(function () {
    var ldgZero;
    if (secs < 10) {
        ldgZero = "0";
    } else {
        ldgZero = "";
    }
    $(".time").text(mins + ":" + ldgZero + secs);
    $(".tomato").click(function () {
        if (running) {
            running = false;
        } else {
            runTimer();
        }
    });
    $(".reset").click(function () {
        remaining = mins;
        running = false;
    });
});