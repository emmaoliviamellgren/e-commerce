// TODO:
// 1. Meddelande vid lyckat köp
// 2. Se till att man inte kan göra ett köp om varukorgen är tom
// 3. Fixa plus-symboler vid produkterna (i ProductCard)
// 4. Skapa Skeleton när produkterna/API laddas
// 5. (Eventuellt) fixa så att alert körs varje gång 'Add To Cart' klickas på
// 6. (Eventuellt) expandera checkout-popovern (i Navbar)

import { Outlet, useLocation } from 'react-router-dom';

// Contexts
import ProductsContextProvider from '../contexts/ProductsContext';
import CartContextProvider from '../contexts/CartContext';

// Components
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';

function Root() {
    /* Conditionally render Hero and ProductGrid components based on whether I am at Root page or not */
    const location = useLocation();

    return (
        <CartContextProvider>
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
        </CartContextProvider>
    );
}
export default Root;
