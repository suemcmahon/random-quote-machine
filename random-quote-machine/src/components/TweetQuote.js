import './TweetQuote.css';
import twitterLogo from '../images/twitter-share-icon.svg';
import PropTypes from 'prop-types';

const TweetQuote = ({tweetQuote}) => {
    return (
        <a id="tweet-quote" className="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${tweetQuote}`} rel="noopener noreferrer">
            <img src={twitterLogo} className="tweet-quote-img" alt="Twitter logo" width="50" height="50" title="Share quote on Twitter" />
        </a>
        
    );
}

TweetQuote.propTypes = {
    tweetQuote: PropTypes.string
};
export default TweetQuote;