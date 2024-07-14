import apiResponse from "../../utils/apiResponse.js";
import cloudinary from "cloudinary";
import { Book } from "../../model/index.js";

// Initialize Cloudinary
cloudinary.config({
    cloud_name: "dbmy60hnl",
    api_key: "146773226516987",
    api_secret: "KD3Tx-i8reLbOAWRB7v9HWZI2eA",
});

// File type validation function
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}

// Function to upload file on Cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder };

    if (quality) {
        options.quality = quality;
    }

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

export const addBook = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('Request files:', req.files);

        const { title, ISBN, author, publisher, year, genre, quantity, newArrival, trending, section } = req.body;

        // Validation for required fields
        if (!title || !ISBN || !author || !publisher || !year || !genre || !quantity) {
            return apiResponse(res).error("All fields are required!", 400);
        }

        // Handle file upload
        if (!req.files || !req.files.image) {
            return apiResponse(res).error("Image file is required!", 400);
        }

        const { image } = req.files;

        // Validation for supported file types
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = image.name.split(".").pop().toLowerCase();

        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return apiResponse(res).error("File format not supported!", 400);
        }

        // Upload image to Cloudinary
        const response = await uploadFileToCloudinary(image, "Bookwarden");

        // Create a new book instance with the uploaded image URL
        const newBook = new Book({
            title,
            ISBN,
            author,
            image: response.secure_url,
            publisher,
            year,
            genre,
            quantity,
            newArrival,
            trending,
            section,
        });

        const savedBook = await newBook.save();
        return apiResponse(res).success("Book added successfully!", savedBook, 200);
    } catch (error) {
        console.error("Error adding book:", error);
        return apiResponse(res).error("Internal Server Error", 500);
    }
}
