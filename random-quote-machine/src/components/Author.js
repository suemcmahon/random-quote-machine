import './Author.css';

const Author = ({ author }) => {
    return (
        <div id="author" className="author">
            - {author}
        </div>
    );
}
export default Author;