var quotesJSON = '{"quotes":[{"quote": "You can do anything, but not everything.","author": "David Allen"},{"quote": "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.","author": "Antoine de Saint-Exupery"},{"quote": "The richest man is not he who has the most, but he who needs the least.","author": "unknown"},{"quote": "You miss 100 percent of the shots you never take.","author": "Wayne Gretzky"},{"quote": "Courage is not the absence of fear, but rather the judgement that something else is more important than fear.","author": "Ambrose Redmoon"},{"quote": "You must be the change you wish to see in the world.","author": "Mahatma Gandhi"},{"quote": "When hungry, eat your rice; when tired, close your eyes. Fools may laugh at me, but wise men will know what I mean.","author": "Lin-Chi"},{"quote": "The third-rate mind is only happy when it is thinking with the majority. The second-rate mind is only happy when it is thinking with the minority. The first-rate mind is only happy when it is thinking.","author": "A. A. Milne"},{"quote": "To the man who only has a hammer, everything he encounters begins to look like a nail.","author": "Abraham Maslow"},{"quote": "We are what we repeatedly do. Excellence, then, is not an act but a habit.","author": "Aristotle"},{"quote": "A wise man gets more use from his enemies than a fool from his friends.","author": "Baltasar Gracian"},{"quote": "Do not seek to follow in the footsteps of the men of old; seek what they sought.","author": "Matsuo Basho"},{"quote": "Watch your thoughts; they become words. Watch your words; they become actions. Watch your actions; they become habits. Watch your habits; they become character. Watch your character; it becomes your destiny.","author": "Lao-Tze"},{"quote": "Everyone is a genius at least once a year. The real geniuses simply have their bright ideas closer together.","author": "Georg Christoph Lichtenberg"},{"quote": "What we think, or what we know, or what we believe is, in the end, of little consequence. The only consequence is what we do.","author": "John Ruskin"},{"quote": "The real voyage of discovery consists not in seeking new lands but seeing with new eyes.","author": "Marcel Proust"},{"quote": "Work like you don\'t need money, love like you\'ve never been hurt, and dance like no one\'s watching.","author": "unknown"},{"quote": "Try a thing you haven\'t done three times. Once, to get over the fear of doing it. Twice, to learn how to do it. And a third time, to figure out whether you like it or not.","author": "Virgil Garnett Thomson"},{"quote": "Even if you\'re on the right track, you\'ll get run over if you just sit there.","author": "Will Rogers"},{"quote": "People often say that motivation doesn\'t last. Well, neither does bathing; that\'s why we recommend it daily.","author": "Zig Ziglar"}]}';
var currentQuote = "";
var currentAuthor = "";

function newQuote() {
    // Pull the JSON data into a variable
    var json = JSON.parse(quotesJSON);
    var texts = json.quotes;

    // Randomize which quote will be chosen
    var currentText = Math.floor(Math.random() * texts.length);

    // Assign the chosen text and corresponding author to variables, then update the HTML to display them
    currentQuote = texts[currentText].quote;
    currentAuthor = texts[currentText].author;

    // Hide the current quote, update the text, then fade back in
    $(".quote-text").fadeOut(400, function() {
        $("#text").html(currentQuote);
    }).fadeIn(400);
    $(".quote-author").fadeOut(400, function() {
        $("#author").html(currentAuthor);
    }).fadeIn(400);

    // Establish the color options
    var colors = ["#A7D6A6", "#A0E3C7", "#A0A6E3", "#E3A0D3", "#E3B4A0", "#E3DAA0", "#ABE3A0", "#D67878", "#E3CF44", "#53CDE3"]

    // Randomize which color will be chosen
    var currentColor = Math.floor(Math.random() * colors.length);

    // Update the CSS to change the color of the background, the buttons, and the text
    $("body").animate({
        backgroundColor: colors[currentColor]
    }, 800);
    $(".button").animate({
        backgroundColor: colors[currentColor]
    }, 800);
    $("#text").animate({
        color: colors[currentColor]
    }, 800);
    $("#author").animate({
        color: colors[currentColor]
    }, 800);
}

function tweetQuote() {
    // Truncate the quote if too long and add an ellipsis
    var tweetableQuote = "";
    if (currentQuote.length > 108) {
        tweetableQuote = currentQuote.slice(0, 105) + "%E2%80%A6";
    } else {
        tweetableQuote = currentQuote;
    };

    // Open twitter and prepopulate a new tweet
    window.open("https://twitter.com/intent/tweet?text=%E2%80%9C" + tweetableQuote + "%E2%80%9D&hashtags=quotes&url=https://nai888.github.io/freeCodeCamp-Random-Quote-Machine/&related=freecodecamp,ianacook", "_blank");
}

$(document).ready(function() {
    // Load a quote and change the color of the background immediately upon load
    newQuote();

    // Establish the click actions
    $("#new-quote").click(newQuote);
    $("#tweet-quote").click(tweetQuote);
});
