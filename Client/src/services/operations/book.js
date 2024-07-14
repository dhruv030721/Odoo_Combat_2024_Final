import { BookEndpoints } from "../apis.js";
import { apiConnector } from "../apiConnector";

class Book {
    async getBook() {
        const response = await apiConnector("GET", BookEndpoints.GET_BOOK);
        return response;
    }

    async issueBook(book_id, user_id, due_date) {

        const body = {
            book_id,
            user_id,
            due_date
        }

        const response = await apiConnector("POST", BookEndpoints.ISSUE_BOOK, body);
        return response;
    }

}

const bookInstance = new Book();

export default bookInstance;
