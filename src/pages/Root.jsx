// React Icon Pack
// import { icon } from "react-icons/ai";

import { Outlet, useLocation } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

function Root() {
    /* Conditionally render Hero and ProductGrid components based on whether I am at Root page or not */
    const location = useLocation();

    return (
        <>
            <Navbar />
            <Outlet />
            {location.pathname === '/' && (
                <>
                    <Hero />
                    <ProductGrid />
                </>
            )}
            <Footer />
        </>
    );
}
export default Root;
