var colors = {
    prim: { // Blue
        main: "#1D878C",
        lst: "#E3E9E9",
        ler: "#5FABAE",
        der: "#016065",
        dst: "#00282A"
    },
    sec1: { // Yellow
        main: "#E8BB2F",
        lst: "#FFFDF8",
        ler: "#FFE28B",
        der: "#A77E00",
        dst: "#453400"
    },
    sec2: { // Red
        main: "#D22A57",
        lst: "#FAF3F5",
        ler: "#EC809D",
        der: "#970029",
        dst: "#3F0011"
    },
    comp: { // Orange
        main: "#E8842F",
        lst: "#FFFBF8",
        ler: "#FFC08B",
        der: "#A74D00",
        dst: "#452000"
    }
};

function hoverColors() {
    $("a").hover(function() {
        $(this).animate({
            color: colors.comp.main
        }, 400);
    }, function() {
        $(this).animate({
            color: colors.sec1.main
        }, 400);
    });
    $(".btn").hover(function() {
        $(this).animate({
            color: colors.comp.main
        }, 400);
    }, function() {
        $(this).animate({
            color: colors.sec2.main
        }, 400);
    });
    $("#query, .btn").hover(function() {
        $(this).animate({
            borderColor: colors.comp.main
        }, 400);
    }, function() {
        $(this).animate({
            borderColor: colors.sec2.main
        }, 400);
    });
}

var submitReady = false;
var query = "";
var data = {};

function callAPI(x) {
    var urlQuery = x.replace(/\s/g, "%20");
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
            "action": "query",
            "format": "json",
            "prop": "revisions",
            "generator": "search",
            "rvprop": "content",
            "gsrsearch": urlQuery,
            "gsrnamespace": "0",
            "gsrlimit": "15"
        },
        success: function(json) {
            data = json.query.pages;
            console.log(data);
        }
    });
}

function showSearch() {
    submitReady = true;
    $("#close").toggle(400);
    $("#query").toggle(400).focus();
    $('form input').on('keypress', function(e) {
        if (e.which === 13) {
            e.preventDefault();
        }
    });
}

function submitSearch() {
    query = document.getElementById("query").value;
    callAPI(query);
}

function hideSearch() {
    submitReady = false;
    $("#close").toggle(400);
    $("#query").toggle(400);
}

function randomArticle() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

$(document).ready(function() {
    hoverColors();
    $("#search").click(function() {
        if (!submitReady) {
            showSearch();
        } else if (submitReady) {
            submitSearch();
        }
    })
    $('form').on('keypress', function(e) {
        if (e.which === 13) {
            submitSearch();
        }
    });
    $("#close").click(hideSearch);
    $("#random").click(randomArticle);
});
