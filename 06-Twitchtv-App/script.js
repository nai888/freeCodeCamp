var colors = {
    prim: {
        main: "#00883F",
        lst: "#38D07F",
        ler: "#05BE5B",
        der: "#005E2B",
        dst: "#002210"
    },
    comp: {
        main: "#C18300",
        lst: "#FFC345",
        ler: "#FFAF06",
        der: "#845A00",
        dst: "#302000"
    }
};
var users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"]
var data = {};

function getData() {
    function getURL(type, name) {
        return "https://wind-bow.gomix.me/twitch-api/" + type + "/" + name + "?callback=?";
    }
    $.each(users, function(index, value) {
        $.getJSON(getURL("streams", value), function(json) {
            data[value] = json.stream;
            status = "";
            if (data[value] !== null) {
                status = "Online";
            } else {
                status = "Offline";
            }

            function printStatus() {
                if (status === "Online") {
                    return "<b>" + status + ":</b> " + data[value]["game"];
                } else {
                    return status;
                }
            }
            $("#status-box").append('<div class="stream" id="' + value + '"><h4><a href="https://www.twitch.tv/"' + value + '" target="_blank">' + value + '</a></h4><p>' + printStatus() + '</p></div>');
        });
    });
    console.log(data);
}

$(document).ready(function() {
    getData();
});
