// ! Array of quotes
var quotes = [
    "Be yourself; everyone else is already taken. – Oscar Wilde",
    "In three words I can sum up everything I've learned about life: it goes on. – Robert Frost",
    "To live is the rarest thing in the world. Most people exist, that is all. – Oscar Wilde",
    "Good friends, good books, and a sleepy conscience: this is the ideal life. – Mark Twain",
    "We accept the love we think we deserve. – Stephen Chbosky",
    "Without music, life would be a mistake. – Friedrich Nietzsche"
];

// ! Variables to track the current and last quote
var lastQuoteIndex = -1;

var quoteText = document.getElementById('quote-text');
var quoteButton = document.getElementById('quote-button');

// ! Function to generate a random quote
function getRandomQuote() {
    var randomIndex;

    // ! Ensure the new quote is different from the last one
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);

    lastQuoteIndex = randomIndex;

    // ! To Display the new quote
    quoteText.innerHTML = quotes[randomIndex];
}

