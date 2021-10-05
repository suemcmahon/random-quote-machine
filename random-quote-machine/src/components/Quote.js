import './Quote.css';

const Quote = ({ text }) => {
    return (
        <div id="text" className="quote">
            {text}
        </div>
    );
}
export default Quote;