// Contexts
import ProductsContextProvider from '../../contexts/ProductsContext';
import CartContextProvider from '../../contexts/CartContext';
import CategoryContextProvider from '../../contexts/CategoryContext';

// Components
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
            <CartContextProvider>
                <ProductsContextProvider>
                    <CategoryContextProvider>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </CategoryContextProvider>
                </ProductsContextProvider>
            </CartContextProvider>
        </>
    );
};

export default AuthLayout;
