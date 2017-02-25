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

function randomArticle() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

var submitReady = false;

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

function hideSearch() {
    submitReady = false;
    $("#query").val("");
    $("#close").toggle(400);
    $("#query").toggle(400);
}

var submitted = false;

function submitSearch() {
    var query = document.getElementById("query").value;
    if (!submitted) {
        callAPI(query);
    } else if (submitted) {
        $("#results").toggle(200).empty();
        callAPI(query);
    }
    submitted = true;
}

function clearSearch() {
    $("#results").toggle(400).empty();
    hideSearch();
    submitted = false;
}

var data = {};

function callAPI(x) {
    var urlQuery = x.replace(/\s/g, "%20");
    $.ajax({
        url: "https://en.wikipedia.org/w/api.php",
        dataType: "jsonp",
        data: {
            "action": "query",
            "format": "json",
            "prop": "extracts",
            "generator": "search",
            "exchars": "500",
            "exlimit": "15",
            "exintro": 1,
            "explaintext": 1,
            "exsectionformat": "plain",
            "gsrsearch": urlQuery,
            "gsrnamespace": "0",
            "gsrlimit": "15"
        },
        success: function(json) {
            data = json.query.pages;
            $.each(data, function(k, v) {
                var pageID = v.pageid;
                var title = v.title;
                var extract = v.extract;
                $("#results").append('<a class="article-link" href="https://en.wikipedia.org/?curid=' + pageID + '" target="blank"><div class="result"><h2 class="article-title">' + title + '</h2><p class="article-extract">' + extract + '</p></div></a>');
            });
            $("#results").toggle(400);
        }
    });
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
    $("#close").click(function() {
        if (!submitted) {
            hideSearch();
        } else if (submitted) {
            clearSearch();
        }
    });
    $("#random").click(randomArticle);
});
