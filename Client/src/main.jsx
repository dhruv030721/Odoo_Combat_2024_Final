import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './slices/store.js';
import { AuthLayout, Login, Signup, IssueBook, IssuedBook, Home, AdminHome, AddBook } from "./pages/index.js";
import { Toaster } from 'react-hot-toast';
import { BookDetails } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AuthLayout><App /></AuthLayout>}>
        <Route path='/home' element={<Home />} />
        <Route path="/books/:isbn" element={<BookDetails />} />
        <Route path="/issue/:isbn" element={<IssueBook />} />
        <Route path='/issued/:user_id' element={<IssuedBook />} /> {/* Fixed path */}
      </Route>
      <Route path='/admin' element={<AuthLayout><AdminHome /></AuthLayout>}>
        <Route path='addbook' element={<AddBook />} />
      </Route>
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>,
);
