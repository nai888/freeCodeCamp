var colors = {
    prim: { // Blue
        main: "#236267",
        lst: "#79999C",
        ler: "#497B80",
        der: "#09494F",
        dst: "#002F33"
    },
    sec1: { // Yellow
        main: "#AA8639",
        lst: "#FFECC5",
        ler: "#D2B477",
        der: "#825D0D",
        dst: "#553900"
    },
    sec2: { // Red
        main: "#AA3E39",
        lst: "#FFC8C5",
        ler: "#D27B77",
        der: "#82130D",
        dst: "#550400"
    },
    comp: { // Orange
        main: "#AA6E39",
        lst: "#FFE0C5",
        ler: "#D2A277",
        der: "#82440D",
        dst: "#552800"
    }
};

function hoverColors() {
    $("a").hover(function() {
        $(this).animate({
            color: colors.comp.main
        }, 400);
    }, function() {
        $(this).animate({
            color: colors.sec1.ler
        }, 400);
    });
    $(".btn").hover(function() {
        $(this).animate({
            borderColor: colors.comp.main,
            color: colors.comp.main
        }, 400);
    }, function() {
        $(this).animate({
            borderColor: colors.sec2.main,
            color: colors.sec2.main
        }, 400);
    });
}

function randomArticle() {
    window.open("https://en.wikipedia.org/wiki/Special:Random", "_blank");
}

$(document).ready(function() {
    hoverColors();
    $("#random").click(randomArticle);
});
