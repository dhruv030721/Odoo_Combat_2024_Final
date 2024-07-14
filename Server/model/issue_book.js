import mongoose, { mongo } from "mongoose";

const issueBookSchema = mongoose.Schema({
    book_id: {
        type: String,
        ref: "Book"
    },
    user_id: {
        type: String,
        ref: "User"
    },
    issue_date: {
        type: Date
    },
    due_date: {
        type: Date
    }
})


const IssueBook = mongoose.model("IssueBook", issueBookSchema);

export default IssueBook;