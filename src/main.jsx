// TODO:
// 1. Fixa en korrekt order history
// 2. Fixa private layout om användaren ej har ngn order history
// 3. Gör conditional statement för Get:en/Post:
// (EV) Fixa plus-symboler vid produkterna (i ProductCard)
// (EV) expandera checkout-popovern (i Navbar)

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Layouts
import PublicLayout from './app/public/PublicLayout';
import AuthLayout from './app/auth/AuthLayout';
import PrivateLayout from './app/private/PrivateLayout';
import RootLayout from './RootLayout';

// Pages
import HomePage from './app/public/HomePage';
import ErrorPage from './app/public/ErrorPage';
import ContactPage from './app/public/ContactPage';
import ProductDetailsPage from './app/public/ProductDetailsPage';
import CheckoutPage from './app/public/CheckoutPage';
import CheckoutSuccessfulPage from './app/public/CheckoutSuccessfulPage';
import LoginPage from './app/auth/LoginPage';
import RegisterPage from './app/auth/RegisterPage';
import OrderHistoryPage from './app/private/OrderHistoryPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
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
                errorElement: <ErrorPage />,
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
            {
                path: 'private',
                element: <PrivateLayout />,
                errorElement: <ErrorPage />,
                children: [
                    {
                        index: true,
                        element: <OrderHistoryPage />,
                    },
                ],
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
