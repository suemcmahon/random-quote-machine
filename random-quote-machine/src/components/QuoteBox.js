import { useEffect, useState } from 'react';
import './QuoteBox.css';
import generateRandomQuote from '../utils/generateRandomQuote';
import Quote from './Quote';
import Author from './Author';
import NewQuoteButton from './NewQuoteButton';
import TweetQuote from './TweetQuote';

const QuoteBox = () => {

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
                    generateRandomQuote(result, setQuoteItem, setAuthorItem);
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
                <TweetQuote tweetQuote={`${QuoteItem} - ${AuthorItem}`} />
                <NewQuoteButton newQuote={() => generateRandomQuote(items, setQuoteItem, setAuthorItem)} />
            </footer>
        </div>
    );
}
export default QuoteBox;