import { Outlet } from 'react-router-dom';

// Contexts
import ProductsContextProvider from '../../contexts/ProductsContext';
import CartContextProvider from '../../contexts/CartContext';
import CategoryContextProvider from '../../contexts/CategoryContext';
import AuthContextProvider from '../../contexts/AuthContext';

// Components
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const PublicLayout = () => {
    return (
        <AuthContextProvider>
            <CartContextProvider>
                <ProductsContextProvider>
                    <CategoryContextProvider>
                        <Navbar />
                        <Outlet />
                        <Footer />
                    </CategoryContextProvider>
                </ProductsContextProvider>
            </CartContextProvider>
        </AuthContextProvider>
    );
};

export default PublicLayout;
