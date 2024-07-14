import apiResponse from "../../utils/apiResponse.js";

// File type validation function
function isFileTypeSupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}


// Function to upload file on Cloudinary
async function uploadFileToCloudinary(file, folder, quality) {
    const options = { folder, };

    if (quality) {
        options.quality = quality;
    }

    // options.resource_type = "auto";

    // Add Cloudinary background removal settings
    // options.background_removal = "cloudinary_ai";

    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

export const addBook = async (req, res) => {
    try {
        const { title, ISBN, author, image, publisher, year, genre, quantity, newArrival, trending, section } = req.body;

        // Create a new book instance
        const newBook = new Book({
            title,
            ISBN,
            author,
            image,
            publisher,
            year,
            genre,
            quantity,
            newArrival,
            trending,
            section,
        });

        const { files } = req.files;

        // Validation
        const supportedTypes = ["jpg", "jpeg", "png"];
        const fileType = files.name.split(".")[1].toLowerCase();

        // If file is not supported
        if (!isFileTypeSupported(fileType, supportedTypes)) {
            return res.status(400).json({
                success: false,
                message: 'File format not supported!'
            })
        }


        // If file is supported
        const response = await uploadFileToCloudinary(files, "Practice");
        console.log(response);

        newBook.image = response.secure_url;

        const savedBook = await newBook.save();
        return apiResponse(res).success("Book added successfully!", true, 200);
    } catch (error) {
        return apiResponse(res).error("Internal Server Error", 500);
    }
}