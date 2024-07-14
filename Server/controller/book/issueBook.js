import { Book, IssueBook } from "../../model/index.js";
import apiResponse from "../../utils/apiResponse.js";

export const issueBook = async (req, res) => {
    try {

        const { book_id, user_id, due_date } = req.body;

        const date = new Date();

        const BookInstance = await Book.findOne({
            ISBN: book_id
        })

        const IssuedBook = await IssueBook.find({
            book_id
        })

        if (IssuedBook.length == BookInstance.quantity) {
            return apiResponse(res).success("Book is not available", false, 401);
        }

        BookInstance.quantity -= 1;

        if (BookInstance.quantity < 0) {
            BookInstance.quantity == 0;
            await BookInstance.save();
            return apiResponse(res).error("Book quantity cannot be in negative", 403)
        }

        await BookInstance.save();

        await IssueBook.create({
            book_id,
            user_id,
            date,
            due_date
        })

        return apiResponse(res).success("Book issued successfully!", true, 200);

    } catch (error) {
        console.log(error);
        return apiResponse(res).error("Internal Server Error", 500);
    }
}