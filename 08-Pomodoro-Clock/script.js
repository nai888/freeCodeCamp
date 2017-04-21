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

function adjTime(whichTimer, adj) {
    var type;
    if (whichTimer === "break") {
        type = breakTime;
    } else if (whichTimer === "session") {
        type = sessTime;
    }
    if (adj === "minus") {
        if (type > minute) {
            type -= minute;
        } else if (type > 15 * second) {
            type -= 15 * second;
        } else if (type > 5 * second) {
            type -= 5 * second;
        } else if (type > second) {
            type -= second;
        }
    } else if (adj === "plus") {
        if (type < 5 * second) {
            type += second;
        } else if (type < 15 * second) {
            type += 5 * second;
        } else if (type < minute) {
            type += 15 * second;
        } else {
            type += minute;
        }
    }
    if (whichTimer === "break") {
        breakTime = type;
        $(".break-time").text(displayTime(breakTime));
    } else if (whichTimer === "session") {
        sessTime = type;
        $(".session-time").text(displayTime(sessTime));
    }
    if (!running && !breakSession) {
        reset();
    }
}

var countDown;
var distance = 0;
var prevTime = 0;
var timeDur;

function run(timer) {
    var startTime = Date.now();
    if (prevTime === 0) {
        timeDur = timer;
    }
    running = true;
    countDown = setInterval(function () {
        var now = Date.now();
        distance = Math.abs(startTime - now);
        timerTime = timeDur - distance - prevTime;
        $(".time").text(displayTime(timerTime));
        if (distance >= timeDur) {
            if (breakSession) {
                breakSession = false;
                reset();
                run(sessTime);
            } else {
                breakSession = true;
                reset();
                run(breakTime);
            }
        }
        $(".session-break").text(displayBreakSess());
    }, 100);
}

function stop() {
    running = false;
    clearInterval(countDown);
    prevTime += distance;
    $(".time").text(displayTime(timerTime));
}

function reset() {
    if (!running) {
        breakSession = false;
    }
    if (!breakSession) {
        timerTime = sessTime;
    } else {
        timerTime = breakTime;
    }
    stop();
    distance = 0;
    prevTime = 0;
    $(".session-break").text(displayBreakSess());
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
            if (breakSession) {
                run(breakTime);
            } else {
                run(sessTime);
            }
            $(".start-stop").text("Stop");
        } else {
            stop();
            $(".start-stop").text("Start");
        }
    });
    $(".reset").click(function () {
        stop();
        reset();
    });
});