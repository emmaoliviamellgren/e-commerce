// TODO: 1. Skapa detaljsida för produkter med Context API
// TODO: 2. Skapa Skeleton när produkterna/API laddas

import { Outlet, useLocation } from 'react-router-dom';
import ProductsContextProvider from '../contexts/ProductsContext';

// Components
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

function Root() {
    /* Conditionally render Hero and ProductGrid components based on whether I am at Root page or not */
    const location = useLocation();

    return (
        <ProductsContextProvider>
            <Navbar />
            <Outlet />
            {location.pathname === '/' && (
                <>
                    <Hero />
                    <ProductGrid />
                </>
            )}
            <Footer />
        </ProductsContextProvider>
    );
}
export default Root;
