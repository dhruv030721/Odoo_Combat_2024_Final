import mongoose, { mongo } from "mongoose";


const bookSchema = mongoose.Schema({
    title: {
        type: String
    },
    ISBN: {
        type: String
    },
    author: {
        type: String
    },
    image: {
        type: String
    },
    publisher: {
        type: String
    },
    year: {
        type: String
    },
    genre: {
        type: String
    },
    quantity: {
        type: Number
    },
    newArrival: {
        type: Boolean
    },
    trending: {
        type: Boolean
    },
    section: {
        type: String
    },
})


const Book = mongoose.model("Book", bookSchema);

export default Book;