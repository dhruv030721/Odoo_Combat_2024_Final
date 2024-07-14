import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import store from './slices/store.js';
import { AuthLayout, Login } from "./pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<AuthLayout><App /></AuthLayout>} />
      <Route path='/login' element={<Login />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
);
