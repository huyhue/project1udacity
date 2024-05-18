import Shelves from "./component/Shelves";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MainPage = ({ books, onChange }) => {
  
  const category = [
    { key: "currentlyReading", name: "Currently Reading" },
    { key: "wantToRead", name: "Want to Read" },
    { key: "read", name: "Read" },
  ];
  console.log("books2: ");
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads: A Book Tracking App</h1>
      </div>
      <div className="list-books-content">
        <div>
          {category.map((cate) => (
            <Shelves
              key={cate.key}
              category={cate}
              books={books}
              onChange={onChange}
            />
          ))}
        </div>
      </div>
      <div className="open-search">
        <Link to={"/search"}>Add to book</Link>
      </div>
    </div>
  );
};

export default MainPage;

MainPage.propTypes = {
  books: PropTypes.array.isRequired,
  onChange: PropTypes.func,
};
