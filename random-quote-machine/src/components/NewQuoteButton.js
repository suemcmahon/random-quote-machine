import './NewQuoteButton.css';
import PropTypes from 'prop-types';

const NewQuoteButton = ({newQuote}) => {
    return (
        <button id="new-quote" className="button new-quote" onClick={newQuote}>
            New Quote
        </button>
    );
};

NewQuoteButton.propTypes = {
    newQuote: PropTypes.func
};
export default NewQuoteButton;