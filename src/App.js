import "./App.css";
import { useState, useEffect } from "react";
import * as BooksAPI from "./BooksAPI";
import { Route, Routes } from "react-router-dom";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    BooksAPI.getAll().then((books) => {
      console.log("test: ", books);
      setBooks(books);
    });
  }, []);
  console.log("books1: ");
  const updateBook = (book, category) => {
    BooksAPI.update(book, category).then(() => {
      let filtered = [];
      if (category === "none") {
        filtered = books.filter((item) => item.id !== book.id);
      } else {
        book.category = category;
        filtered = books.filter((item) => item.id !== book.id).concat(book);
      }
      setBooks(filtered);
    });
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<MainPage books={books} onChange={updateBook}/>}
      />
      <Route
        exact
        path="/search"
        element={<SearchPage books={books} onChange={updateBook} />}
      />
    </Routes>
  );
}

export default App;
