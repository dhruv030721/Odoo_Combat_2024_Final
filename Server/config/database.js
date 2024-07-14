import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

const dbConnect = () => {
    mongoose.connect(process.env.MONGO_URL)
        .then(() => {
            console.log("Database connected successfully!")
        })
        .catch((error) => {
            process.exit(1);
        });
};

export default dbConnect;
