import { Link } from "react-router-dom";
import { React, useState } from "react";
import Book from "./component/Book";
import PropTypes from "prop-types";
import * as BooksAPI from "./BooksAPI";

const SearchPage = ({ books, onChange }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [findBook, setFindBook] = useState([]);

  const handleChange = (e) => {
    console.log("handleChange: ");
    setInputSearch(e);
    searchBook(e);
  };

  const searchBook = (query) => {
    console.log("books4: ");
    let input = query.toString().toLowerCase();
    if (input.length > 0) {
      BooksAPI.search(input).then((books) => {
        if (books.error) {
          setFindBook([]);
        } else {
          setFindBook(books);
        }
      });
    } else {
      setFindBook([]);
    }
  };

  const listBook = findBook.map((book) => {
    books.map((item) => {
      if (item.id === book.id) {
        book.category = item.category;
      }
      return item;
    });
    return book;
  });
  console.log("books3: ");
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            value={inputSearch}
            placeholder="Search by Title Or Author"
            onChange={(e) => handleChange(e.target.value)}
          />
        </div>
      </div>
      {inputSearch.length !== 0 && (
        <div className="search-books-results">
          <ol className="books-grid">
            {listBook.map((b) => (
              <Book
                key={b.id}
                book={b}
                category={b.category ? b.category : "none"}
                onChange={onChange}
              />
            ))}
          </ol>
        </div>
      )}
      <div className="search-books-results">
        {inputSearch.length === 0 && (
          <p className="note">Input book to search.</p>
        )}
        {inputSearch.length !== 0 && findBook.length === 0 && (
          <p className="note">Not find books</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;

SearchPage.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
};
