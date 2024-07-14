import { useState } from 'react';
import bookInstance from '../../services/operations/book'; // Adjust import as necessary
import toast from 'react-hot-toast';

const AddBook = () => {
    const [title, setTitle] = useState('');
    const [ISBN, setISBN] = useState('');
    const [author, setAuthor] = useState('');
    const [image, setImage] = useState(null);
    const [publisher, setPublisher] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [newArrival, setNewArrival] = useState(false);
    const [trending, setTrending] = useState(false);

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('ISBN', ISBN);
        formData.append('author', author);
        formData.append('image', image);
        formData.append('publisher', publisher);
        formData.append('year', year);
        formData.append('genre', genre);
        formData.append('quantity', quantity);
        formData.append('newArrival', newArrival);
        formData.append('trending', trending);

        await toast.promise(
            bookInstance.addBook(formData),
            {
                loading: "Processing....",
                success: (response) => {
                    return `${response.data.message}`;
                },
                error: (error) => {
                    return `${error.response.message}`;
                }
            }
        )
    };

    return (
        <div className="container mx-auto px-4 mt-6">
            <h1 className="text-2xl font-bold mb-4">Add New Book</h1>
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Title</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">ISBN</label>
                    <input type="text" value={ISBN} onChange={(e) => setISBN(e.target.value)} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Author</label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Image</label>
                    <input type="file" onChange={handleImageChange} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Publisher</label>
                    <input type="text" value={publisher} onChange={(e) => setPublisher(e.target.value)} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Year</label>
                    <input type="text" value={year} onChange={(e) => setYear(e.target.value)} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Genre</label>
                    <input type="text" value={genre} onChange={(e) => setGenre(e.target.value)} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Quantity</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} className="border rounded-lg w-full p-2" required />
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" checked={newArrival} onChange={() => setNewArrival(!newArrival)} className="mr-2" />
                        New Arrival
                    </label>
                </div>
                <div className="mb-4">
                    <label className="flex items-center">
                        <input type="checkbox" checked={trending} onChange={() => setTrending(!trending)} className="mr-2" />
                        Trending
                    </label>
                </div>
                <button type="submit" className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition duration-200">
                    Add Book
                </button>
            </form>
        </div>
    );
};

export default AddBook;
