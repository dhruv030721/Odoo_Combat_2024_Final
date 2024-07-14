import { useEffect, useState } from "react";
import bookInstance from "../../services/operations/book";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addIssuedBook } from "../../slices/book.slice";
import { IssueBookCard } from "../../components/index.js"; // Import your BookCard component
import Loading from "../../components/loading.jsx";

const IssuedBook = () => {
    const { user_id } = useParams();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const issuedBookData = useSelector(state => state.book.issuedBook);

    useEffect(() => {
        (async () => {
            const response = await bookInstance.getIssueBook(user_id);
            dispatch(addIssuedBook(response.data.data));
            setLoading(false);
        })();
    }, [user_id, dispatch]); // Add dependencies for useEffect

    if (loading) {
        return (
            <Loading />
        );
    }

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">Issued Books</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array.isArray(issuedBookData) && issuedBookData.map((book) => (
                    <IssueBookCard key={book.book_id} book={book} /> // Use the appropriate property for the key
                ))}
            </div>
        </div>
    );
};

export default IssuedBook;
