import express from "express";

const Router = express.Router();


import { login, signup } from "../controller/authentication/index.js"
import { getBooks, issueBook, getIssuedBook, addBook, removeBook } from "../controller/book/index.js"


Router.post('/auth/login', login);
Router.post('/auth/signup', signup);


// Book Routes
Router.get('/book/getbook', getBooks);
Router.post('/book/issue_book', issueBook);
Router.get('/book/get_issued_book/:user_id', getIssuedBook)
Router.post('/book/add_book', addBook);
Router.get('/book/remove_book/:id', removeBook);
export default Router;

