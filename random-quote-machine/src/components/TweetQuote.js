import './TweetQuote.css';

const TweetQuote = ({tweetQuote}) => {
    return (
        <a id="tweet-quote" className="button tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${tweetQuote}`} rel="noopener noreferrer">Tweet Quote</a>
    );
}
export default TweetQuote;