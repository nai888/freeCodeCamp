var entry = "";
var decimal = false;
var operand = false;
var equation = [];
var answer = "";

function displayEntry() {
    if (entry === "") {
        $("p.entry").html("0");
    } else {
        $("p.entry").html(entry);
    }
}

function displayEquation() {
    if (equation.length === 0) {
        $("p.equation").html("0");
    } else {
        $("p.equation").html(equation.join(""));
    }
}

function CE() {
    entry = "";
    displayEntry();
}

function AC() {
    CE();
    equation = [];
    displayEquation();
}

function decimal() {
    if (entry = "") {
        entry = "0.";
    } else if (!decimal) {
        entry += ".";
    }
    decimal = true;
}

function number(num) {
    if (operand === false) {
        if (num === "dot") {
            decimal();
        } else {
            entry += num;
        }
    } else {
        equation.push(entry);
        if (num === "dot") {
            decimal();
        } else {
            entry += num;
        }
        operand = false;
    }
    displayEntry();
    displayEquation();
}

function operand(op) {

}

function equals() {

}

$(document).ready(function() {
    displayEntry();
    displayEquation();
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
    $(".operand").click(function() {
        var oper = $(this).attr("value");
        operand(oper);
    });
    $(".equals").click(function() {
        equals();
    });
    $(document).keypress(function(e) {
        switch (e.which) {
            case 13: // enter
                $(".equals").trigger("click");
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
            case 88: // X and x
                $(".times").trigger("click");
                break;
        }
    });
});
