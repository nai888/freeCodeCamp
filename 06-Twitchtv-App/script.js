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
                    status = "nouser"
                } else {
                    if (data.streams[value] !== null) {
                        status = "online";
                    } else {
                        status = "offline";
                    }
                }

                function printStatus() {
                    var text = '<span class="status ' + status + '">'
                    if (status === "online") {
                        text += status + ':</span> ' + data.streams[value]["game"];
                    } else if (status === "offline") {
                        text += status + '</span>';
                    } else if (status === "nouser") {
                        text += "user does not exist</span>";
                    }
                    return text;
                }

                function pLink() {
                    if (status === "nouser") {
                        return value;
                    } else {
                        return '<a href="https://www.twitch.tv/' + value + '" target="_blank">' + value + '</a>';
                    }
                }
                $("#status-box").append('<div class="row stream ' + status + '" id="' + value + '"><div class="col-xs-5"><p class="username">' + pLink() + '</p></div><div class="col-xs-7"><p>' + printStatus() + '</p></div></div>');
            });
        });
    });
}

function filterButtons() {
    $("#filter-online").click(function() {
        $(".stream.online").show();
        $(".stream.offline").hide();
        $(".stream.nouser").hide();
    });
    $("#filter-offline").click(function() {
        $(".stream.online").hide();
        $(".stream.offline").show();
        $(".stream.nouser").hide();
    });
    $("#filter-all").click(function() {
        $(".stream.online").show();
        $(".stream.offline").show();
        $(".stream.nouser").show();
    });
}

$(document).ready(function() {
    getData();
    filterButtons()
});
