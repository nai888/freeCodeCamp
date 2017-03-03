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
var data = {
    streams: {},
    users: {}
};

function getData() {
    function getURL(type, name) {
        return "https://wind-bow.gomix.me/twitch-api/" + type + "/" + name + "?callback=?";
    }
    $.each(users, function(index, value) {
        $.getJSON(getURL("streams", value), function(jsonStreams) {
            data.streams[value] = jsonStreams.stream;
            $.getJSON(getURL("users", value), function(jsonUsers) {
                data.users[value] = jsonUsers;
                var status = "";
                if (data.users[value].name === undefined) {
                    status = "User does not exist"
                } else {
                    if (data.streams[value] !== null) {
                        status = "Online";
                    } else {
                        status = "Offline";
                    }
                }

                function printStatus() {
                    if (status === "Online") {
                        return "<b>" + status + ":</b> " + data.streams[value]["game"];
                    } else {
                        return status;
                    }
                }

                function h4Link() {
                    if (status === "User does not exist") {
                        return value;
                    } else {
                        return '<a href="https://www.twitch.tv/' + value + '" target="_blank">' + value + '</a>';
                    }
                }
                $("#status-box").append('<div class="stream" id="' + value + '"><h4>' + h4Link() + '</h4><p>' + printStatus() + '</p></div>');
            });
        });
    });
    console.log(data);
}

$(document).ready(function() {
    getData();
});
