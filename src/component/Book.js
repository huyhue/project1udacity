import React from "react";
import PropTypes from "prop-types";

const Book = ({ book, onChange, category }) => {

  const changeShelfHandler = (e) => {
    onChange(book, e.target.value);
  };

  const bookCover = (
    <div
      data-testid="bookCover"
      className="book-cover"
      style={{
        width: 128,
        height: 193,
        backgroundImage: `url("${
          book.imageLinks ? book.imageLinks.thumbnail : ""
        }")`,
      }}
    ></div>
  );

  return (
    <li>
      <div className="book">
        <div className="book-top">
          {bookCover}
          <div className="book-shelf-changer">
            <select
              value={category}
              onChange={changeShelfHandler}
            >
              <option value="move" disabled>
                Move to...
              </option>
              <option value="none">None</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
    </li>
  );
};

export default Book;

Book.propTypes = {
  book: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  category: PropTypes.string,
};
