import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const BookDetails = () => {
    const { isbn } = useParams();
    const bookData = useSelector(state => state.book.bookData);

    // Filter the book based on ISBN
    const book = bookData.find(book => book.ISBN === isbn);

    return (
        <div className="container mx-auto px-4 mt-6">
            {book ? (
                <div className="flex bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={book.image} alt={book.title} className="w-1/5 h-full object-cover" />
                    <div className="flex-grow p-6">
                        <h1 className="font-bold text-3xl mb-2 text-gray-900">{book.title}</h1>
                        <p className="text-gray-700 text-lg mb-2"><strong>Author:</strong> {book.author}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>ISBN:</strong> {book.ISBN}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>Publisher:</strong> {book.publisher}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>Year:</strong> {book.year}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>Genre:</strong> {book.genre}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>Quantity:</strong> {book.quantity}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>Description:</strong> {book.description}</p>
                        <p className="text-gray-700 text-lg mb-2"><strong>Section:</strong> {book.section}</p>
                        <button className="mt-6 bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow transition duration-200">
                            <Link to={`/issue/${book.ISBN}`}>Issue Book</Link>
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-center text-gray-700">Book not found.</p>
            )}
        </div>
    );
};

export default BookDetails;
