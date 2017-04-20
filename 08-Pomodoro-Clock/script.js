const second = 1000;
const minute = 60 * second;

var breakTime = 5 * minute;
var sessTime = 25 * minute;
var timerTime;
var running = false;
var breakSession = false;

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

function displayBreakSess() {
    if (breakSession) {
        return "Break";
    } else {
        return "Session";
    }
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
        $(".break-time").text(displayTime(breakTime));
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
        $(".session-time").text(displayTime(sessTime));
        if (!running) {
            reset();
        }
    }
}

var countDown;
var distance = 0;
var prevTime = 0;
var timeDur;

function runTimer() {
    var startTime = Date.now();
    if (prevTime === 0) {
        timeDur = sessTime;
    }
    countDown = setInterval(function () {
        running = true;
        var now = Date.now();
        distance = Math.abs(startTime - now);
        timerTime = timeDur - distance - prevTime;
        $(".time").text(displayTime(timerTime));
        if (distance >= timeDur) {
            stop();
        }
    }, 100);
}

function stop() {
    running = false;
    clearInterval(countDown);
    prevTime += distance;
    $(".time").text(displayTime(timerTime));
}

function reset() {
    stop();
    distance = 0;
    prevTime = 0;
    timerTime = sessTime;
    $(".time").text(displayTime(timerTime));
}

$(document).ready(function () {
    timerTime = sessTime;
    $(".break-time").text(displayTime(breakTime));
    $(".session-time").text(displayTime(sessTime));
    $(".time").text(displayTime(timerTime));
    $(".session-break").text(displayBreakSess());
    $(".start-stop").text("Start");
    $(".break.minus").click(function () {
        adjTime("break", "minus");
    });
    $(".break.plus").click(function () {
        adjTime("break", "plus");
    });
    $(".session.minus").click(function () {
        adjTime("session", "minus");
    });
    $(".session.plus").click(function () {
        adjTime("session", "plus");
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
    $(".reset").click(function () {
        reset();
    });
});