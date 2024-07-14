import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
    const { name } = useSelector((state) => state.auth.userData);
    const username = name.split(' ')[0];
    const navigate = useNavigate();

    const logoutHandler = () => {
        navigate('/login');
        window.location.reload(); 
    }
    return (
        <header className="text-black py-4 px-16 font-poppins">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="" className="h-16" />
                </div>
                <nav className="flex-grow text-center">
                    <ul className="flex justify-center space-x-4 text-orange-800 font-semibold">
                        <li>
                            <Link to="/admin/home" className="inline-block">Home</Link>
                        </li>
                        <span className="text-gray-500 px-2">|</span>
                        <li>
                            <Link to="/admin/addbook" className="inline-block">Add Book</Link>
                        </li>
                        <span className="text-gray-500 px-2">|</span>
                        <li>
                            <Link to="/admin/updatebook" className="inline-block">Update Book</Link>
                        </li>
                        <span className="text-gray-500 px-2">|</span>
                        <li>
                            <Link to="/admin/removebook" className="inline-block">Remove Book</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex items-center space-x-4">
                    <Link to="/userprofile" className="flex items-center">
                        <FaUserCircle size={30} />
                        <span className="text-black font-semibold text-lg ml-2">{username}</span>
                    </Link>
                    <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-lg shadow hover:bg-red-700 transition duration-200" onClick={logoutHandler}>
                        Logout
                    </button>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
