import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import bookInstance from "./services/operations/book";
import { addBookData } from "./slices/book.slice";
import BookCard from "./components/bookCard.jsx";
import { Header } from "./pages/index.js";

function App() {
  const dispatch = useDispatch();
  const bookData = useSelector((state) => state.book.bookData);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    (async () => {
      const response = await bookInstance.getBook();
      dispatch(addBookData(response.data.data));
      setLoading(false);
    })();
  }, [dispatch]);

  if (loading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="font-poppins">
      <Header />
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search for a book..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border rounded-lg w-full p-2"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {Array.isArray(bookData) && bookData.map((book) => (
            <BookCard key={book.ISBN} book={book} />
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default App;
