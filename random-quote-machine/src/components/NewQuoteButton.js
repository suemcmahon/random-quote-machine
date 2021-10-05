import './NewQuoteButton.css';

const NewQuoteButton = ({newQuote}) => {
    return (
        <button id="new-quote" className="button new-quote" onClick={newQuote}>
            New Quote
        </button>
    );
}
export default NewQuoteButton;