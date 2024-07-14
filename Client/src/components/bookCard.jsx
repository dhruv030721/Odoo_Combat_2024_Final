import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
    const availability = book.quantity > 0 ? "Available" : "Unavailable";
    const availabilityClass = book.quantity > 0 ? "bg-green-100 text-green-600" : "bg-red-100 text-red-600";

    return (
        <Link to={`/books/${book.ISBN}`} className="block">
            <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg m-2">
                <img src={book.image} alt={book.title} className="w-full h-60 object-cover" />
                <div className="px-4 py-3">
                    <div className="font-bold text-lg mb-1 text-gray-900">{book.title}</div>
                    <p className="text-gray-700 text-sm mb-1"><strong>Author:</strong> {book.author}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>ISBN:</strong> {book.ISBN}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Publisher:</strong> {book.publisher}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Year:</strong> {book.year}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Genre:</strong> {book.genre}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Quantity:</strong> {book.quantity}</p>
                    <p className={`text-sm mb-1 font-semibold ${availabilityClass} px-2 py-1 rounded-md inline-block`}>
                        <strong>Status:</strong> {availability}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;
