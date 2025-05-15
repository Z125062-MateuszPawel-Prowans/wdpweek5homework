const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("newQuoteBtn");

var quotes = [];

function getQuote() {
    if(quotes.length === 0) {
        fetch("/wdpweek5homework/part1/quotes.json")
            .then(response => response.json())
            .then(data => {
                quotes = data;
                getQuote();
            })
            .catch(error => console.error("Error fetching quotes:", error));
    } else {
        const quote = quotes[Math.floor(Math.random() * quotes.length)];

        quoteText.textContent = quote.q;
        authorText.textContent = quote.a;
    }


}
newQuoteBtn.addEventListener("click", getQuote);
getQuote();
