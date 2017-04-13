var entry = "";
var decimal = false;
var operator = false;
var equation = [];
var answer = null;

function display() {
    if (entry.length === 0) {
        $("p.entry").html("0");
    } else {
        $("p.entry").html(entry);
    }
    if (equation.length === 0) {
        $("p.equation").html("0");
    } else {
        $("p.equation").html(equation.join(""));
    }
}

function CE() {
    entry = "";
    decimal = false;
    display();
}

function AC() {
    operator = false;
    equation = [];
    answer = null;
    CE();
}

function addDecimal() {
    if (entry.length === 0) {
        entry = "0.";
    } else if (!decimal) {
        entry += ".";
    }
    decimal = true;
}

function number(num) {
    if (answer !== null) {
        AC();
    }
    if (operator) {
        CE();
        operator = false;
    }
    if (num === "dot") {
        addDecimal();
    } else if (num === "0") {
        if (entry.length > 0) {
            entry += "0";
        }
    } else {
        entry += num;
    }
    display();
}

function equals() {
    if (answer === null) { // Do nothing if an answer is already being displayed
        var nums = Math.ceil(equation.length/2);
        answer = equation[0];
        for (var i=1;i<nums;i++) {
            var num1 = answer;
            var op = equation[i*2-1];
            switch (op) {
                case "&minus;":
                    op = "-";
                    break;
                case "&times;":
                    op = "*";
                    break;
                case "&divide;":
                    op = "/";
                    break;
            }
            var num2 = equation[i*2];
            answer = eval(num1 + op + num2);
        }
        entry = answer;
        equation.push(answer);
        decimal = false;
        operator = false;
    }
    display();
}

function addOperator(oper) {
    if (answer !== null) {
        equation = [];
        equation.push(entry);
        answer = null;
    } else if (!operator) {
        if (equation.length === 0 && entry.length === 0) {
            equation.push(0);
        } else if (decimal) {
            equation.push(parseFloat(entry));
        } else {
            equation.push(parseInt(entry, 10));
        }
    } else {
        equation.pop();
    }
    var op = "";
    switch (oper) {
        case "plus":
            op = "+";
            break;
        case "minus":
            op = "&minus;";
            break;
        case "times":
            op = "&times;";
            break;
        case "divide":
            op = "&divide;";
            break;
        case "equals":
            op = "=";
            break;
    }
    equation.push(op);
    operator = true;
    display();
}

$(document).ready(function() {
    display();
    $(".ce").click(function() {
        CE();
    });
    $(".ac").click(function() {
        AC();
    });
    $(".number").click(function() {
        var val = $(this).attr("value");
        number(val);
    });
    $(".operator").click(function() {
        var oper = $(this).attr("value");
        addOperator(oper);
    });
    $(".equals").click(function() {
        equals();
    });
    $(document).keypress(function(e) {
        switch (e.which) {
            case 13: // enter
                $(".operator").trigger("click");
                break;
            case 42: // *
                $(".times").trigger("click");
                break;
            case 43: // +
                $(".plus").trigger("click");
                break;
            case 45: // -
                $(".minus").trigger("click");
                break;
            case 46: // .
                $(".dot").trigger("click");
                break;
            case 47: // /
                $(".divide").trigger("click");
                break;
            case 48: // 0
                $(".zero").trigger("click");
                break;
            case 49: // 1
                $(".one").trigger("click");
                break;
            case 50: // 2
                $(".two").trigger("click");
                break;
            case 51: // 3
                $(".three").trigger("click");
                break;
            case 52: // 4
                $(".four").trigger("click");
                break;
            case 53: // 5
                $(".five").trigger("click");
                break;
            case 54: // 6
                $(".six").trigger("click");
                break;
            case 55: // 7
                $(".seven").trigger("click");
                break;
            case 56: // 8
                $(".eight").trigger("click");
                break;
            case 57: // 9
                $(".nine").trigger("click");
                break;
            case 61: // =
                $(".equals").trigger("click");
                break;
        }
    });
    $(document).keydown(function(e) {
        switch (e.which) {
            case 8: // backspace
                $(".ce").trigger("click");
                break;
            case 27: // esc
                $(".ac").trigger("click");
                break;
            case 65: // A and a
                $(".ac").trigger("click");
                break;
            case 67: // C and c
                $(".ce").trigger("click");
                break;
            case 88: // X and x
                $(".times").trigger("click");
                break;
        }
    });
});
