import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import authentication from "../../services/operations/authentication.js";
import { login } from "../../slices/auth.slice.js";
// import logo from "../../assets/logo.png";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async () => {
        try {
            await toast.promise(
                authentication.login(email, password),
                {
                    loading: "Processing....",
                    success: (response) => {
                        dispatch(login(response.data.data));
                        navigate('/');
                        return `${response.data.message}`;
                    },
                    error: (error) => {
                        return `${error.message}`;
                    }
                }
            );
        } catch (error) {
            console.error("Loggedin failed:", error);
        }
    };

    return (
        <div className="min-h-screen font-poppins flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-screen-xl mx-auto flex w-full">
                {/* Form Section */}
                <div className="w-1/2 flex justify-center items-center">
                    <div className="max-w-md w-full space-y-8">
                        <div>
                            {/* <img className="mx-auto h-52 w-auto" src={logo} alt="Logo" /> */}
                            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login</h2>
                        </div>
                        <form className="mt-8 space-y-6">
                            <input type="hidden" name="remember" value="true" />
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    <label htmlFor="email-address" className="sr-only">Email address</label>
                                    <input
                                        id="email-address"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={handleEmailChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="password" className="sr-only">Password</label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        value={password}
                                        onChange={handlePasswordChange}
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />
                                </div>
                            </div>

                            {/* Removed forgot password link */}
                        </form>
                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-black hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                onClick={handleSubmit}
                            >
                                Log in
                            </button>
                        </div>
                        <div className="text-center">
                            <p className="mt-2 text-sm text-gray-600">
                                {"Don't have an account? "}
                                <Link to="/signup" className="font-medium text-black hover:text-indigo-500">
                                    Signup
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

export default Login;
