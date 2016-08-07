// Create an array of quote objects

var quotes = [{
    quote: "Design is not for phylosophy, it's for life",
    author: "Issey Miyake",
    attrib: "https://designschool.canva.com"
}, {
    quote: "Design is not just what it looks like and feels like. Design is how it works.",
    author: "Steve Jobs",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "The details are not the details. They make the design.",
    author: "Charles Eames",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "Every contrivance of man, every tool, every instrument, every utensil, every article designed for use, of each and every kind, evolved from a very simple beginnings.",
    author: "Robert Collier",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
    author: "Antoine de Saint-Exupery",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "Many things difficult to design prove easy to performance.",
    author: "Samuel Johnson",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "Design is a funny word. Some people think design means how it looks. But of course, if you dig deeper, it's really how it works. ",
    author: "Steve Jobs",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "Good design doesn't date.",
    author: "Harry Seidler",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "Recognizing the need is the primary condition for design.",
    author: "Charles Eames",
    attrib: "http://www.brainyquote.com"
}, {
    quote: "It’s through mistakes that you actually can grow. You have to get bad in order to get good.",
    author: "Paula Scher",
    attrib: "https://99designs.com.au"
}, {
    quote: "Good design is obvious. Great design is transparent.",
    author: "Joe Sparano",
    attrib: "https://99designs.com.au"
}, {
    quote: "Do not seek praise. Seek criticism.",
    author: "Paul Arden",
    attrib: "https://99designs.com.au"
}, {
    quote: "If you think good design is expensive, you should look at the cost of bad design.",
    author: "Ralf Speth",
    attrib: "https://99designs.com.au"
}, {
    quote: "If I had asked people what they wanted, they would have said faster horses.",
    author: "Henry Ford",
    attrib: "https://99designs.com.au"
}, {
    quote: "Practice safe design: Use a concept.",
    author: "Petrula Vrontikis",
    attrib: "https://99designs.com.au"
}, {
    quote: "Only those who attempt the absurd will achieve the impossible.",
    author: "M.C. Escher",
    attrib: "https://99designs.com.au"
}, {
    quote: "Any intelligent fool can make things bigger and more complex. It takes a touch of genius—and a lot of courage—to move in the opposite direction.",
    author: "E. F. Schumacher",
    attrib: "https://99designs.com.au"
}, {
    quote: "A designer is an emerging synthesis of artist, inventor, mechanic, objective economist, and evolutionary strategist.",
    author: "Buckminster Fuller",
    attrib: "https://99designs.com.au"
}, {
    quote: "A user interface is like a joke. If you have to explain it, it’s not that good.",
    author: "Martin LeBlanc",
    attrib: "https://99designs.com.au"
}, {
    quote: "The work you do while you procrastinate is probably the work you should be doing for the rest of your life.",
    author: "Jessica Hische",
    attrib: "https://99designs.com.au"
}, {
    quote: "Curiosity about life in all its aspects, I think, is still the secret of great creative people.",
    author: "Leo Burnett",
    attrib: "https://99designs.com.au"
}, {
    quote: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
    author: "Aristotle",
    attrib: "https://99designs.com.au"
}, {
    quote: "If you’re not prepared to be wrong, you’ll never come up with anything original.",
    author: "Sir Ken Robinson",
    attrib: "https://99designs.com.au"
}, {
    quote: "The best ideas come as jokes. Make your thinking as funny as possible.",
    author: "David Ogilvy",
    attrib: "https://99designs.com.au"
}, {
    quote: "I don't need an alarm clock. My ideas wake me",
    author: "Ray Bradbury",
    attrib: "https://designschool.canva.com"
}, {
    quote: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
    attrib: "http://www.brainyquote.com/"
}];

//Function to randomly generate a quote and append it on the page
function getQuote() {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    $('.quote').text(randomQuote.quote);
    $('.author').text(randomQuote.author);
}

//An event listener which fires getQuote() function when clicking the button
$(document).ready(function() {
    $('.btn-getquote').on('click', function() {
        getQuote();
    });
});
