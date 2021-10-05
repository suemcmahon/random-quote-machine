import './TweetQuote.css';

const TweetQuote = ({tweetQuote}) => {
    return (
        <button id="tweet-quote" className="button tweet-quote" onClick={tweetQuote}>
            Tweet Quote
        </button>
    );
}
export default TweetQuote;