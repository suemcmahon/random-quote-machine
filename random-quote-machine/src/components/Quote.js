import './Quote.css';
import PropTypes from 'prop-types';

const Quote = ({ text }) => {
    return (
        <div id="text" className="quote">
            {text}
        </div>
    );
}

Quote.propTypes = {
    text: PropTypes.string
};
export default Quote;