import mongoose from "mongoose";

const Role = ["Admin", "User", "Librarian"];


const userSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    mobile_number: {
        type: String
    },
    password: {
        type: String
    },
    fcmToken: {
        type: String
    },
    role: {
        type: String,
        enum: Role
    },
    preferred_type: {
        type: String
    }
})

const User = mongoose.model("User", userSchema);

export default User;