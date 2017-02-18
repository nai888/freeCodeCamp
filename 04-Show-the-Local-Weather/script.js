var currentLocation = "";
var currentTemperatureF = 32;
var currentTemperatureC = 0
var system = "F";
var temp = currentTemperatureF;

function backgroundColor() {
    var color = 0;
    if (currentTemperatureF <= 0) {
        color = 0;
    } else if (currentTemperatureF <= 32) {
        color = 1;
    } else if (currentTemperatureF <= 64) {
        color = 2;
    } else if (currentTemperatureF <= 96) {
        color = 3;
    } else {
        color = 4;
    }
    $("body").css("backgroundColor", colors[color]);
}

function printDegs() {
    $("#temp").text(temp);
    $("#system").text(system);
}

function switchSystems() {
    switch (system) {
        case "F":
            temp = currentTemperatureC;
            system = "C";
            break;
        case "C":
            temp = currentTemperatureF;
            system = "F";
            break;
    }
    $("#temperature").fadeOut(200, printDegs).fadeIn(200);
}

$(document).ready(function() {
    backgroundColor();
    printDegs();
    $("#toggle").click(switchSystems);
});
