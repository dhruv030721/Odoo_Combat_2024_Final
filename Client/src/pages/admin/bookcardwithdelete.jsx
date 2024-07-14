import React from 'react';
import toast from 'react-hot-toast';
import bookInstance from '../../services/operations/book'; // Adjust import as necessary

const BookCardWithDelete = ({ book, onDelete }) => {
    const handleDelete = async () => {
        await toast.promise(
            bookInstance.removeBook(book._id),
            {
                loading: "Deleting...",
                success: (response) => {
                    onDelete(book._id);
                    return "Book successfully deleted";
                },
                error: (error) => {
                    return `${error.response.message}`;
                }
            }
        );
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            <img src={book.image} alt={book.title} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-bold mb-2">{book.title}</h2>
            <p className="text-gray-700 mb-1">Author: {book.author}</p>
            <p className="text-gray-700 mb-1">ISBN: {book.ISBN}</p>
            <p className="text-gray-700 mb-1">Publisher: {book.publisher}</p>
            <p className="text-gray-700 mb-1">Year: {book.year}</p>
            <p className="text-gray-700 mb-1">Genre: {book.genre}</p>
            <p className="text-gray-700 mb-1">Quantity: {book.quantity}</p>
            <button
                onClick={handleDelete}
                className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200 mt-4"
            >
                Delete
            </button>
        </div>
    );
};

export default BookCardWithDelete;
