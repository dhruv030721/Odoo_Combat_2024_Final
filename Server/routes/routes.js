import express from "express";

const Router = express.Router();


import { login, signup } from "../controller/authentication/index.js"
import { getBooks, issueBook } from "../controller/book/index.js"


Router.post('/auth/login', login);
Router.post('/auth/signup', signup);


// Book Routes
Router.get('/book/getbook', getBooks);
Router.post('/book/issue_book', issueBook);


export default Router;

