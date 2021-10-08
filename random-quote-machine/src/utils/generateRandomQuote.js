// Generate random quote

const generateRandomQuote = (data, setQuote, setAuthor) => {
    if (data === null) {
        return;
    }

    const randomQuote = data.quotes[
        Math.floor(Math.random() * data.quotes.length)
    ];

    setQuote(randomQuote.quote);
    setAuthor(randomQuote.author);
}

export default generateRandomQuote;