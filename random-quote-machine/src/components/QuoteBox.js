import { useEffect, useState } from 'react';
import './QuoteBox.css';
import Quote from './Quote';
import Author from './Author';
import NewQuoteButton from './NewQuoteButton';
import TweetQuote from './TweetQuote';

const QuoteBox = () => {

    // Generate random quote

    const generateRandomQuote = data => {
        if (data === null) {
            return;
        }

        const randomQuote = data.quotes[
            Math.floor(Math.random() * data.quotes.length)
        ];

        setQuoteItem(randomQuote.quote);
        setAuthorItem(randomQuote.author);
    }

    // State
    const [items, setItems] = useState([]);
    const [QuoteItem, setQuoteItem] = useState(null);
    const [AuthorItem, setAuthorItem] = useState(null);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                    generateRandomQuote(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    
    if (!isLoaded) {
        return <div>Loading...</div>;
    } 

    return (
        <div id="quote-box" className="quote-box">
            <main className="main">
                <Quote text={QuoteItem} />
                <Author author={AuthorItem} />
            </main>
            <footer className="footer">
                <TweetQuote tweetQuote={() => {
                    alert('Tweet Quote');
                }} />
                <NewQuoteButton newQuote={() => generateRandomQuote(items)} />
            </footer>
        </div>
    );
}
export default QuoteBox;