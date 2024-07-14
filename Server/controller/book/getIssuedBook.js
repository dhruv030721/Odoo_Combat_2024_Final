import mongoose from "mongoose";
import { IssueBook } from "../../model/index.js";
import apiResponse from "../../utils/apiResponse.js";

export const getIssuedBook = async (req, res) => {
    try {
        const { user_id } = req.params;

        // Fetch issued books for the user
        const issuedBooks = await IssueBook.find({ user_id:user_id }).populate('book_id');

        if (!issuedBooks || issuedBooks.length === 0) {
            return apiResponse(res).error("No issued books found", 404);
        }


        return apiResponse(res).success("Issued book data fetched successfully!", true, 200, issuedBooks);
    } catch (error) {
        console.error("Error fetching issued books:", error);
        return apiResponse(res).error("Internal Server Error!", 500);
    }
}
