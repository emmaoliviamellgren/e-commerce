// TODO:
// 2. (EV) Fixa plus-symboler vid produkterna (i ProductCard)
// 3. (EV) Skapa Skeleton när produkterna/API laddas
// 4. (EV) fixa så att alert körs varje gång 'Add To Cart' klickas på
// 5. (EV) expandera checkout-popovern (i Navbar)

import { Outlet, useLocation } from 'react-router-dom';

// Contexts
import ProductsContextProvider from '../contexts/ProductsContext';
import CartContextProvider from '../contexts/CartContext';
import CategoryContextProvider from '../contexts/CategoryContext';

// Components
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import ProductGrid from '../components/ProductGrid';
import FilterByCategory from '../components/FilterByCategory';

function Root() {
    /* Conditionally render Hero and ProductGrid components based on whether I am at Root page or not */
    const location = useLocation();

    return (
        <CartContextProvider>
            <ProductsContextProvider>
                <CategoryContextProvider>
                    <Navbar />
                    <Outlet />
                    {location.pathname === '/' && (
                        <>
                            <Hero />
                            <div className='text-center my-12'>
                                <h1 className='text-3xl mb-2'>
                                    Shop our products
                                </h1>
                                <p>Browse the collection</p>
                            </div>

                            <FilterByCategory />
                            <ProductGrid />
                        </>
                    )}
                    <Footer />
                </CategoryContextProvider>
            </ProductsContextProvider>
        </CartContextProvider>
    );
}
export default Root;
