import { Book, IssueBook } from "../../model/index.js";
import apiResponse from "../../utils/apiResponse.js";
import mongoose from "mongoose";
import mailSender from "../../config/mailSender.js";

export const issueBook = async (req, res) => {
    try {
        const { book_id, user_id, due_date, email } = req.body;
        const date = new Date();

        // Validate due_date
        const dueDate = new Date(due_date);
        if (dueDate < date) {
            return apiResponse(res).error("Due date cannot be in the past!", 400);
        }

        const bookID = new mongoose.Types.ObjectId(book_id);

        const bookInstance = await Book.findById(bookID);
        if (!bookInstance) {
            return apiResponse(res).error("Book not found!", 404);
        }

        const issuedBookInstance = await IssueBook.findOne({
            user_id,
            book_id: bookID
        });

        if (issuedBookInstance) {
            return apiResponse(res).error("Book already issued!", 401);
        }

        const issuedBooksCount = await IssueBook.countDocuments({ book_id: bookID });

        if (issuedBooksCount >= bookInstance.quantity) {
            return apiResponse(res).error("Book is not available", 403);
        }

        bookInstance.quantity -= 1;
        if (bookInstance.quantity < 0) {
            bookInstance.quantity = 0; // Ensure it doesn't go negative
        }

        await bookInstance.save();

        await IssueBook.create({
            book_id: bookID,
            user_id,
            date,
            due_date
        });

        const response = await mailSender(
            'Bookwarden - Dhruv Godhani <dhruvgodhani07@gmail.com>',
            email,
            'Book Issued!',
            `<h3>Book Name: ${bookInstance.title}</h3>
            <h3>Book ISBN: ${bookInstance.ISBN}</h3>
            <h3>Due date: ${due_date}</h3>`
        );

        if (response) {
            return apiResponse(res).success("Book issued successfully!", true, 200);
        } else {
            return apiResponse(res).error("Some error occurred in mail sending!", 403);
        }
    } catch (error) {
        console.error("Error issuing book:", error);
        return apiResponse(res).error("Internal Server Error", 500);
    }
}
