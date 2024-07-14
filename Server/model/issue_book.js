import mongoose, { mongo } from "mongoose";

const issueBookSchema = mongoose.Schema({
    book_id: {
        type: mongoose.Schema.Types.ObjectId,
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
    },
    status: {
        type: String,
        default: "Issued",
    }
})


const IssueBook = mongoose.model("IssueBook", issueBookSchema);

export default IssueBook;