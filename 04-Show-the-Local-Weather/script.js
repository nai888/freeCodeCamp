var myLocation = {};
var currentLocation = "";
var myWeather = {};
var temp = 0;
var system = "F";
var condition = "";
var icon = "";

function printDegs() {
    $("#temp").text(temp);
    $("#system").text(system);
}

function printLoc() {
    currentLocation = myLocation.name + ", " + myLocation.region;
    $("#location").text(currentLocation);
}

function switchSystems() {
    if (system === "F") {
        system = "C";
        temp = myWeather.cels;
    } else if (system === "C") {
        system = "F";
        temp = myWeather.fahr;
    }
    $("#temperature").fadeOut(200, printDegs).fadeIn(200);
}

$(document).ready(function() {
    // Requests access for location data
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // Assigns latitude and longitude as properties to object myLocation
            myLocation.lat = position.coords.latitude;
            myLocation.long = position.coords.longitude;
            // API call to Apixu using the gathered latitude and longitude data, and assign the response to var data
            $.getJSON("https://api.apixu.com/v1/current.json?key=6ffa29a58b6d4a32937231310171702&q=" + myLocation.lat + "," + myLocation.long, function(json) {
                myLocation.name = json.location.name;
                myLocation.region = json.location.region;
                myWeather.fahr = json.current.temp_f;
                myWeather.cels = json.current.temp_c;
                temp = myWeather.fahr;
                printLoc();
                printDegs();
                icon = json.current.condition.icon;
                condition = json.current.condition.text;
                $("#icon").attr("src", "http:" + icon);
                $("#condition").text(condition);
                $("#toggle").click(switchSystems);
            });
        });
    } else {
        $("#location").text("Location data unavailable");
    }
});
