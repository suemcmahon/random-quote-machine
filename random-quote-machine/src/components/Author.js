import './Author.css';
import PropTypes from 'prop-types';

const Author = ({ author }) => {
    return (
        <div id="author" className="author">
            - {author}
        </div>
    );
}

Author.propTypes = {
    author: PropTypes.string
};

export default Author;