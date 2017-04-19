const minute = 60 * 1000;
const second = 1000;

function displayTime(time) {
    var mins = Math.floor(time / minute);
    var secs = Math.floor((time % minute) / second);
    var dispSecs = function () {
        if (secs < 10) {
            return "0" + secs;
        } else {
            return secs;
        }
    }
    return mins + ":" + dispSecs();
}

function adjTime(type, adj) {
    if (type === "break") {
        if (adj === "minus") {
            if (breakTime >= minute) {
                breakTime -= minute;
            } else {
                breakTime = 0;
            }
        } else if (adj === "plus") {
            breakTime += minute;
        }
    } else if (type === "session") {
        if (adj === "minus") {
            if (sessTime >= minute) {
                sessTime -= minute;
            } else {
                sessTime = 0;
            }
        } else if (adj === "plus") {
            sessTime += minute;
        }
    }
}

var countDown;
var distance = 0;

function runTimer() {
    var startTime = Date.now();
    countDown = setInterval(function () {
        running = true;
        var now = Date.now();
        distance = Math.abs(startTime - now);
        timerTime = sessTime - distance;
        $(".time").text(displayTime(timerTime));
        if (distance >= sessTime) {
            stop();
        }
    }, 100);
}

function stop() {
    running = false;
    clearInterval(countDown);
    $(".time").text(displayTime(timerTime));
}

function reset() {
    stop();
    distance = 0;
    timerTime = sessTime;
    $(".time").text(displayTime(timerTime));
}

var breakTime = 5 * minute;
var sessTime = 25 * minute;
var timerTime;
var running = false;

$(document).ready(function () {
    timerTime = sessTime;
    $(".break-time").text(displayTime(breakTime));
    $(".session-time").text(displayTime(sessTime));
    $(".time").text(displayTime(timerTime));
    $(".start-stop").text("Start");
    $(".break.minus").click(function () {
        adjTime("break", "minus");
        $(".break-time").text(displayTime(breakTime));
    });
    $(".break.plus").click(function () {
        adjTime("break", "plus");
        $(".break-time").text(displayTime(breakTime));
    });
    $(".session.minus").click(function () {
        adjTime("session", "minus");
        $(".session-time").text(displayTime(sessTime));
        if (!running) {
            reset();
        }
    });
    $(".session.plus").click(function () {
        adjTime("session", "plus");
        $(".session-time").text(displayTime(sessTime));
        if (!running) {
            reset();
        }
    });
    $(".start-stop").click(function () {
        if (!running) {
            runTimer();
            $(".start-stop").text("Stop");
        } else if (running) {
            stop();
            $(".start-stop").text("Start");
        }
    });
    $(".reset").click(reset());
});