import { Link } from "react-router-dom";

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
};

const IssueBookCard = ({ book }) => {
    return (
        <Link to={`/books/${book.ISBN}`} className="block">
            <div className="max-w-xs bg-white rounded-lg overflow-hidden shadow-lg m-2">
                <img src={book.book_id.image} alt={book.book_id.title} className="w-full h-48 object-cover" />
                <div className="px-4 py-3">
                    <div className="font-bold text-lg mb-1  text-gray-900">{book.book_id.title}</div>
                    <p className="text-gray-700 text-sm mb-1"><strong>Author:</strong> {book.book_id.author}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>ISBN:</strong> {book.book_id.ISBN}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Publisher:</strong> {book.book_id.publisher}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Year:</strong> {book.book_id.year}</p>
                    <p className="text-gray-700 text-sm mb-1"><strong>Genre:</strong> {book.book_id.genre}</p>
                    <p className=" text-sm mb-1 text-red-700"><strong>Due Date:</strong> {formatDate(book.due_date)}</p>
                </div>  
            </div>
        </Link>
    );
};

export default IssueBookCard;
