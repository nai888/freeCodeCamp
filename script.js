// Allows navigation from navbar without adding the # to the URL

$(document).ready(function() {
    $(".scrollLink").click(function(e) {

        $.scrollTo($(this).attr("href"));    
        e.preventDefault();

    });

});