document.addEventListener("DOMContentLoaded", function (event) {
    var timer = new Vue({
        el: "main",
        data: {
            breakMins: 5,
            breakSecs: "00",
            sessMins: 25,
            sessSecs: "00",
            timerMins: 25,
            timerSecs: "00"
        },
        computed: {
            breakTime: function () {
                return this.breakMins + ":"/* + ldgZero(this.breakSecs)*/ + this.breakSecs;
            },
            sessTime: function () {
                return this.sessMins + ":"/* + ldgZero(this.sessSecs)*/ + this.sessSecs;
            },
            timerTime: function () {
                return this.timerMins + ":"/* + ldgZero(this.timerSecs)*/ + this.timerSecs;
            }
        },
        methods: {
            minus: function (type) {
                if (type === 'break' && this.breakMins > 0) {
                    this.breakMins--;
                } else if (type === 'session' && this.sessMins > 0) {
                    this.sessMins--;
                    if (!running) {
                        this.timerMins = this.sessMins;
                    }
                }
            },
            plus: function (type) {
                if (type === 'break') {
                    this.breakMins++;
                } else if (type === 'session') {
                    this.sessMins++;
                    if (!running) {
                        this.timerMins = this.sessMins;
                    }
                }
            }
        }
    });

    function ldgZero(secs) {
        if (secs < 10) {
            return "0";
        }
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
});