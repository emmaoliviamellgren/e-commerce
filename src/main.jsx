import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import Root from './pages/Root';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'product/:id',
        element: <ProductDetails />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
