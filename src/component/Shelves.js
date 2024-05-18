import Book from "./Book";
import PropTypes from "prop-types";

const Shelves = ({ books, category, onChange }) => {
  const list = books.filter((item) => item.category === category.key);

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">
        {category.name}
      </h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {list.map((book) => (
            <Book
              key={book.id}
              book={book}
              category={category.key}
              onChange={onChange}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Shelves;

Shelves.propTypes = {
  books: PropTypes.array.isRequired,
  category: PropTypes.object,
  onChange: PropTypes.func,
};
