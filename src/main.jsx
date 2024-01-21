import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Pages
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import ContactPage from './pages/ContactPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CheckoutPage from './pages/CheckoutPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'contact',
                element: <ContactPage />,
            },
            {
                path: 'product/:_id',
                element: <ProductDetailsPage />,
            },
            {
                path: 'checkout',
                element: <CheckoutPage />,
            }
        ],
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
