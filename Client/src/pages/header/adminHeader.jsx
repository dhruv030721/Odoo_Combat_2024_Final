import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/logo2.png";
import { FaUserCircle } from "react-icons/fa";

const AdminHeader = () => {
    const { name } = useSelector((state) => state.auth.userData);
    const username = name.split(' ')[0];

    return (
        <header className="text-black py-4 px-16 font-poppins">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="" className="h-16" />
                </div>
                <nav className="flex-grow text-center">
                    <ul className="flex justify-center space-x-4 text-orange-800 font-semibold">
                        <li>
                            <Link to="/home" className="inline-block">Home</Link>
                        </li>
                        <span className="text-gray-500 px-2">|</span>
                        <li>
                            <Link to={`/admin/addbook`} className="inline-block">Add Book</Link>
                        </li>
                        <span className="text-gray-500 px-2">|</span>
                        <li>
                            <Link to={`/admin/updatebook`} className="inline-block">Update Book</Link>
                        </li>
                        <span className="text-gray-500 px-2">|</span>
                        <li>
                            <Link to={`/admin/removebook`} className="inline-block">Remove Book</Link>
                        </li>
                    </ul>
                </nav>
                <div className="flex justify-center items-center">
                    <FaUserCircle size={30} />
                    <span className="text-black font-semibold text-lg ml-2">{username}</span>
                </div>
            </div>
        </header>
    );
};

export default AdminHeader;
