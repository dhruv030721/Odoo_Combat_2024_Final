const BASE_URL = "/api/v1";

export const Auth = {
    LOGIN_API: BASE_URL + '/auth/login',
    REGISTER_API: BASE_URL + '/auth/signup'
}


export const BookEndpoints = {
    GET_BOOK: BASE_URL + '/book/getbook',
    ISSUE_BOOK: BASE_URL + '/book/issue_book',
    GET_ISSUED_BOOK: BASE_URL + '/book/get_issued_book/',
    ADD_BOOK: BASE_URL + '/book/add_book'
}