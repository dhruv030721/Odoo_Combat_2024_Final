import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBookData } from '../../slices/book.slice';
import bookInstance from '../../services/operations/book.js';
import BookCard from '../../components/bookCard.jsx';
import Loading from '../../components/loading.jsx';

const Home = () => {
    const dispatch = useDispatch();
    const bookData = useSelector((state) => state.book.bookData);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        (async () => {
            const response = await bookInstance.getBook();
            dispatch(addBookData(response.data.data));
            setTimeout(() => {
                setLoading(false);
            }, 1000);
        })();
    }, [dispatch]);

    // Ensure bookData is an array before filtering
    const filteredBooks = Array.isArray(bookData) ? bookData.filter((book) =>
        book.title.toLowerCase().includes(searchQuery.toLowerCase())
    ) : [];

    const newArrivals = filteredBooks.filter((book) => book.newArrival);
    const trendingBooks = filteredBooks.filter((book) => book.trending);

    if (loading) {
        return <Loading />;
    }

    return (
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
            <div className="flex flex-col">
                <div>
                    <h2 className="text-xl font-bold mb-4">New Arrivals</h2>
                    <div className="grid grid-cols-5 gap-4">
                        {newArrivals.map((book) => (
                            <BookCard key={book.ISBN} book={book} />
                        ))}
                    </div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-4">Trending</h2>
                    <div className="grid grid-cols-5 gap-4">
                        {trendingBooks.map((book) => (
                            <BookCard key={book.ISBN} book={book} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
