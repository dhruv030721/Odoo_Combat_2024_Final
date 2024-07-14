import apiResponse from "../../utils/apiResponse.js";
import { User } from "../../models/index.js"
import bcrypt from "bcrypt";

export const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        if (!email || !password) {
            return apiResponse.error("Validation failed!", 403);
        }

        const UserInstance = await User.findOne({ email: email });

        if (!UserInstance) {
            return apiResponse.error("User not found!", 404);
        }

        if (bcrypt.compare(UserInstance.password, password)) {
            return apiResponse.success("Login Successfully!", true, 200, UserInstance)
        }


    } catch (error) {
        console.log(error);
    }
}