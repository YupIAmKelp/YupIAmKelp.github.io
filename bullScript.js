
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
    {  author: "Kurt Vonnegut", origin: "<i>Cat's Cradle</i>"}
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