import { useSelector } from 'react-redux';

const UserProfile = () => {
    const userData = useSelector((state) => state.auth.userData);

    return (
        <div className="container mx-auto px-4 mt-6">
            <h1 className="text-2xl font-bold mb-4">User Profile</h1>
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Name:</label>
                    <p className="border rounded-lg w-full p-2">{userData.name}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Email:</label>
                    <p className="border rounded-lg w-full p-2">{userData.email}</p>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Preferred Type:</label>
                    <p className="border rounded-lg w-full p-2">{userData.preferred_type}</p>
                </div>
                {/* Add more fields as necessary */}
            </div>
        </div>
    );
};

export default UserProfile;
