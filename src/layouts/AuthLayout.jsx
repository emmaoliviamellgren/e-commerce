// Contexts
import ProductsContextProvider from '../contexts/ProductsContext';
import CartContextProvider from '../contexts/CartContext';
import CategoryContextProvider from '../contexts/CategoryContext';
import { Outlet } from 'react-router-dom';

// Components
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const AuthLayout = () => {
    return (
        <CartContextProvider>
            <ProductsContextProvider>
                <CategoryContextProvider>
                    <Navbar />
                    <Outlet />
                    <Footer />
                </CategoryContextProvider>
            </ProductsContextProvider>
        </CartContextProvider>
    );
};

export default AuthLayout;
