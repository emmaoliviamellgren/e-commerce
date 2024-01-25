import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import PublicLayout from './app/public/PublicLayout';
import AuthLayout from './app/auth/AuthLayout';

// Pages
import HomePage from './app/public/HomePage';
import ErrorPage from './app/public/ErrorPage';
import ContactPage from './app/public/ContactPage';
import ProductDetailsPage from './app/public/ProductDetailsPage';
import CheckoutPage from './app/public/CheckoutPage';
import CheckoutSuccessfulPage from './app/public/CheckoutSuccessfulPage';
import LoginPage from './app/auth/LoginPage';
import RegisterPage from './app/auth/RegisterPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <PublicLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
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
            },
            {
                path: 'checkoutsuccessfull',
                element: <CheckoutSuccessfulPage />,
            },
        ],
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <LoginPage />,
            },
            {
                path: 'register',
                element: <RegisterPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
