import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './slices/store.js';
import { AuthLayout, Login, Signup, IssueBook } from "./pages/index.js";
import { Toaster } from 'react-hot-toast';
import { BookDetails } from "./components/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AuthLayout><App /></AuthLayout>} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path="/books/:isbn" element={<BookDetails />} />
      <Route path="/issue/:isbn" element={<IssueBook />} />

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
