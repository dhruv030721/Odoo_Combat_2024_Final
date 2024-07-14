import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import bookInstance from "../../services/operations/book";

const IssueBook = () => {
    const { isbn } = useParams();
    const bookData = useSelector(state => state.book.bookData);
    const userData = useSelector(state => state.auth.userData);
    const navigate = useNavigate();

    const book = bookData.find(book => book.ISBN === isbn);
    const [issueDate, setIssueDate] = useState("");

    const handleIssue = async () => {
        console.log("Book issued:", book.title, "to", userData.name, "on", issueDate);
        await toast.promise(
            bookInstance.issueBook(book.ISBN, userData._id, issueDate),
            {
                loading: "Processing....",
                success: (response) => {
                    navigate('/');
                    return `${response.data.message}`;
                },
                error: (error) => {
                    return `${error.message}`;
                }
            }
        )
    };

    return (
        <div className="container mx-auto px-4 mt-6">
            {book ? (
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
                    <h1 className="font-bold text-3xl mb-4 text-gray-800">Issue Book</h1>
                    <div className="mb-4">
                        <p className="text-gray-700 text-lg"><strong>Book Title:</strong> {book.title}</p>
                        <p className="text-gray-700 text-lg"><strong>Author:</strong> {book.author}</p>
                        <p className="text-gray-700 text-lg"><strong>ISBN:</strong> {book.ISBN}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-gray-700 text-lg"><strong>User Name:</strong> {userData.name}</p>
                        <p className="text-gray-700 text-lg"><strong>User Email:</strong> {userData.email}</p>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="issue-date" className="block text-gray-700 mb-2">Select Issue Date:</label>
                        <input
                            type="date"
                            id="issue-date"
                            value={issueDate}
                            onChange={(e) => setIssueDate(e.target.value)}
                            className="border border-gray-300 rounded-lg p-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                        />
                    </div>
                    <button
                        onClick={handleIssue}
                        className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition duration-200"
                    >
                        Confirm Issue
                    </button>
                </div>
            ) : (
                <p className="text-center text-gray-700">Book not found.</p>
            )}
        </div>
    );
};

export default IssueBook;
