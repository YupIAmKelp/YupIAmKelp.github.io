
var quotes = [
    {  author: "Kurt Vonnegut", origin: "<i>A Man Without A Country</i>" },
    {  author: "me", origin: "just now" },
    {  author: "Kurt Vonnegut", origin: "<i>Cat's Cradle</i>"},
    {  author: "Kurt Vonnegut", origin: "<i>Slaughterhouse Five</i>"},
    {  author: "Kurt Vonnegut", origin: '"Cold Turkey"'},
    {  author: "Kurt Vonnegut", origin: "<i>Cat's Cradle</i>"},
    {  author: "Kurt Vonnegut", origin: "<i>Palm Sunday: An Autobiographical Collage</i>"},
    {  author: "Ray Bradbury", origin: "<i>Fahrenheit 451</i>"},
    {  author: "Ray Bradbury", origin: "<i>Fahrenheit 451</i>"},
    {  author: "Ray Bradbury", origin: "<i>Fahrenheit 451</i>"},
    {  author: "Aldous Huxley", origin: "<i>Brave New World</i>"},
    {  author: "Aldous Huxley", origin: "<i>Brave New World</i>"},
    {  author: "Aldous Huxley", origin: "<i>Brave New World</i>"},
    {  author: "Philip K. Dick", origin: "<i>Do Androids Dream Of Electric Sheep?</i>"},
    {  author: "Joseph Heller", origin: "<i>Catch-22/i>"},
    {  author: "Joseph Heller", origin: "<i>Catch-22/i>"},
    {  author: "Kurt Vonnegut", origin: "<i>Cat's Cradle</i>"},
    {  author: "George Orwell", origin: "<i>Animal Farm</i>"},
    {  author: "George Orwell", origin: "<i>Animal Farm</i>"},
    {  author: "George Orwell", origin: "<i>Animal Farm</i>"},
    {  author: "George Orwell", origin: "<i>Animal Farm</i>"},
    {  author: "Frank Herbert", origin: "<i>Dune</i>"},
    {  author: "Frank Herbert", origin: "<i>Dune</i>"},
    {  author: "Frank Herbert", origin: "<i>Dune</i>"},
    {  author: "Frank Herbert", origin: "<i>Dune</i>"},
    {  author: "Frank Herbert", origin: "<i>Dune</i>"},
    {  author: "Frank Herbert", origin: "<i>Dune</i>"},
    {  author: "Kurt Vonnegut", origin: "<i>Breakfast Of Champions</i>"},
    {  author: "Kurt Vonnegut", origin: "<i>Breakfast Of Champions</i>"},
    {  author: "Amy Tan", origin: "<i>The Joy Luck Club</i>"},
    {  author: "Amy Tan", origin: "<i>The Joy Luck Club</i>"},
    {  author: "Anthony Burgess", origin: "<i>A Clockwork Orange</i>"},
    {  author: "John Green", origin: "<i>The Fault in Our Stars</i>"},
    {  author: "John Green", origin: "(multiple sources)"},
    {  author: "A teacher I once had", origin: "I don't remember."},
    {  author: "Tim O'Brien", origin: "<i>The Things They Carried</i>"},
    {  author: "Tim O'Brien", origin: "<i>The Things They Carried</i>"},
    {  author: "Tim O'Brien", origin: "<i>The Things They Carried</i>"},
    {  author: "Tim O'Brien", origin: "<i>The Things They Carried</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Isaac Asimov", origin: "<i>Foundation</i>"},
    {  author: "Charles Yu", origin: "<i>How to Live Safely in a Science Fictional Universe</i>"},
    {  author: "Charles Yu", origin: "<i>How to Live Safely in a Science Fictional Universe</i>"},
    {  author: "Charles Yu", origin: "<i>How to Live Safely in a Science Fictional Universe</i>"},
    {  author: "Me", origin: "Just now"}

    
]; // this is stupid, not gonna do it this way.

function randomQuote() {

    var possibleQuotes = document.getElementById('quoteStorage').getElementsByTagName('p');
    
    var randNum = Math.floor( Math.random() * possibleQuotes.length);

    var quoteContents = possibleQuotes[randNum]
    var quoteAuthor = quotes[randNum].author
    var quoteOrigin = quotes[randNum].origin

    document.getElementById("quotePara").innerHTML = '"' + quoteContents.innerText + '"';
    document.getElementById("quoteInfo").innerHTML = "-" + quoteAuthor + ", " + quoteOrigin
}