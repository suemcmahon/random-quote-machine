import './TweetQuote.css';
import twitterLogo from '../images/twitter-share-icon.svg';

const TweetQuote = ({tweetQuote}) => {
    return (
        <div className="social">
            <p>Share quote on Twitter</p>
            <a id="tweet-quote" className="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${tweetQuote}`} rel="noopener noreferrer">
                <img src={twitterLogo} className="App-logo" alt="Twitter logo" width="50" height="50" title="Share quote on Twitter" />
            </a>
        </div>
    );
}
export default TweetQuote;