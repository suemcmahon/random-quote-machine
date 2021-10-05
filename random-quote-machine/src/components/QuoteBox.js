import './QuoteBox.css';
import Quote from './Quote';
import Author from './Author';
import NewQuoteButton from './NewQuoteButton';
import TweetQuote from './TweetQuote';


const QuoteBox = () => {
    return (
        <div id="quote-box" className="quote-box">
            <main className="main">
                <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
                <Author author="Bowz" />
            </main>
            <footer className="footer">
                <TweetQuote tweetQuote={() => {
                    alert('Tweet Quote');
                }} />
                <NewQuoteButton newQuote={() => {
                    alert('Generate new quote');
                }} />
            </footer>
        </div>
    );
}
export default QuoteBox;