import bcrypt from 'bcrypt';
import { User } from '../../model/index.js';
import apiResponse from '../../utils/apiResponse.js';


// Signup route
export const signup = async (req, res) => {
    const { name, email, mobile_number, password, fcmToken, role, preferred_type } = req.body;

    // Basic validation (you might want to use a library like express-validator for more robust validation)
    if (!name || !email || !mobile_number
        || !password || !role) {
        return apiResponse(res).error("Validation Failed", 403);
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return apiResponse(res).error("User already exits", 407);
    }

    try {
        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create a new user
        const newUser = new User({
            name,
            email,
            mobile_number,
            password: hashedPassword,
            fcmToken,
            role,
            preferred_type
        });

        // Save the user to the database
        await newUser.save();

        return apiResponse(res).success("User signup successfully!", true, 201);
    } catch (err) {
        console.error(err);
        return apiResponse(res).error("Internal Server Error", 500)
    }
};
