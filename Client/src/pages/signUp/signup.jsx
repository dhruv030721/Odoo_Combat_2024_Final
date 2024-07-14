import { useState } from "react";
import toast from "react-hot-toast";
import authentication from "../../services/operations/authentication";
import { Link, useNavigate } from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        mobile_number: "",
        email: "",
        role: "User",
        password: "",
        preferred_type: ""
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async () => {
        try {
            await toast.promise(
                authentication.register(formData),
                {
                    loading: "Processing....",
                    success: (response) => {
                        navigate('/login');
                        return `${response.data.message}`;
                    },
                    error: (error) => {
                        return `${error.message}`;
                    }
                }
            );
        } catch (error) {
            console.error("Registration failed:", error);
        }
    };

    return (
        <div className="min-h-screen font-poppins flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto flex w-full items-center">
                {/* Form Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register</h2>
                        </div>
                        <form className="mt-8 space-y-6">
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="name" className="sr-only">Name</label>
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="mobile_number" className="sr-only">Mobile Number</label>
                                    <input
                                        id="mobile_number"
                                        name="mobile_number"
                                        type="text"
                                        required
                                        value={formData.mobile_number}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Mobile Number"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="sr-only">Email</label>
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        value={formData.password}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="preferred_type" className="sr-only">Preferred Type</label>
                                    <select
                                        id="preferred_type"
                                        name="preferred_type"
                                        required
                                        value={formData.preferred_type}
                                        onChange={handleChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    >
                                        <option value="" disabled>Select your preferred type</option>
                                        <option value="Coming-of-Age">Coming-of-Age</option>
                                        <option value="Dystopian">Dystopian</option>
                                        <option value="Political Fiction">Political Fiction</option>
                                        <option value="Science Fiction">Science Fiction</option>
                                        <option value="Classic">Classic</option>
                                        <option value="Romance">Romance</option>
                                        <option value="Tragedy">Tragedy</option>
                                        <option value="Social Critique">Social Critique</option>
                                        <option value="Magic Realism">Magic Realism</option>
                                        <option value="Literary Fiction">Literary Fiction</option>
                                        <option value="Fantasy">Fantasy</option>
                                        <option value="Epic">Epic</option>
                                        <option value="Young Adult">Young Adult</option>
                                        <option value="Adventure">Adventure</option>
                                        <option value="Quest">Quest</option>
                                        <option value="Philosophical Fiction">Philosophical Fiction</option>
                                        <option value="Historical Fiction">Historical Fiction</option>
                                        <option value="War Fiction">War Fiction</option>
                                        <option value="Drama">Drama</option>
                                        <option value="Semi-Autobiographical">Semi-Autobiographical</option>
                                        <option value="Crime Fiction">Crime Fiction</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleSubmit}
                            >
                                Register
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="mt-2 text-sm text-gray-600">
                                {"Already have an account? "}
                                <Link to="/login" className="font-medium text-black hover:text-indigo-500">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={"https://static.vecteezy.com/system/resources/previews/030/759/702/large_2x/old-books-on-a-wooden-table-in-the-library-selective-focus-book-stack-with-ladder-on-sky-with-clouds-background-free-photo.jpg"} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Register;
