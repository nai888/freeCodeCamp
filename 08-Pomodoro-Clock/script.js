document.addEventListener("DOMContentLoaded", function (event) {
    var timer = new Vue({
        el: "main",
        data: {
            breakMins: 5,
            breakSecs: 0,
            sessMins: 25,
            sessSecs: 0,
            timerMins: 25,
            timerSecs: 0
        },
        computed: {
            breakTime: function () {
                return this.breakMins + ":" + ldgZero(this.breakSecs) + this.breakSecs;
            },
            sessTime: function () {
                return this.sessMins + ":" + ldgZero(this.sessSecs) + this.sessSecs;
            },
            timerTime: function () {
                return this.timerMins + ":" + ldgZero(this.timerSecs) + this.timerSecs;
            }
        },
        methods: {
            minus: function (type) {
                
            },
            plus: function (type) {

            }
        }
    });

    function ldgZero(secs) {
        if (secs < 10) {
            return "0";
        }
    }

    function displayTime(mins, secs) {
        return mins + ":" + ldgZero(secs) + secs;
    }

    function updateBreak() {
        timer.breakval = displayTime(breakMins, breakSecs);
    }

    function updateSess() {
        timer.sessval = displayTime(sessMins, sessSecs);
    }

    function updateTimer() {
        timerMins = sessMins;
        timerSecs = sessSecs;
        timer.timerTime = displayTime(sessMins, sessSecs);
    }

    var running = false;

    function runTimer() {
        running = true;
        var startTime = Date.now();
        var countDown = setInterval(function () {
            var now = Date.now();
            var distance = startTime - now;

        }, 1000);
    }
    updateBreak();
    updateSess();
    updateTimer();
    document.getElementById("tomato").addEventListener("click", function () {
        if (running) {
            running = false;
        } else {
            runTimer();
        }
    });
    document.getElementById("reset").addEventListener("click", function () {
        running = false;
        timerMins = sessMins;
        timerSecs = sessSecs;
    });
    document.getElementById("break-minus").addEventListener("click", function () {
        if (breakMins > 0) {
            breakMins--;
        }
        updateBreak();
    });
    document.getElementById("break-plus").addEventListener("click", function () {
        breakMins++;
        updateBreak();
    });
    document.getElementById("session-minus").addEventListener("click", function () {
        if (sessMins > 0) {
            sessMins--;
        }
        updateSess();
        if (!running) {
            updateTimer();
        }
    });
    document.getElementById("session-plus").addEventListener("click", function () {
        sessMins++;
        updateSess();
        if (!running) {
            updateTimer();
        }
    });
});