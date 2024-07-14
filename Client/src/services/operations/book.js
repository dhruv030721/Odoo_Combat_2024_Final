import { BookEndpoints } from "../apis.js";
import { apiConnector } from "../apiConnector";

class Book {
    async getBook() {
        const response = await apiConnector("GET", BookEndpoints.GET_BOOK);
        return response;
    }

    async issueBook(book_id, user_id, due_date, email) {

        const body = {
            book_id,
            user_id,
            due_date,
            email
        }

        const response = await apiConnector("POST", BookEndpoints.ISSUE_BOOK, body);
        return response;
    }

    async getIssueBook(user_id) {
        const response = await apiConnector("GET", BookEndpoints.GET_ISSUED_BOOK + user_id);
        return response;
    }

    async addBook(formData) {
        const headers = {
            'Content-Type': 'multipart/form-data',
        }
        const response = await apiConnector("POST", BookEndpoints.ADD_BOOK, formData, headers);
        return response;
    }

    async removeBook(id) {
        const response = await apiConnector("GET", BookEndpoints.REMOVE_BOOK + id);
        return response;
    }
}

const bookInstance = new Book();

export default bookInstance;
