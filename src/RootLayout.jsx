import { Outlet } from 'react-router-dom';

// Contexts
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import CategoryContextProvider from './contexts/CategoryContext';
import AuthContextProvider from './contexts/AuthContext';

const RootLayout = () => {
    return (
        <AuthContextProvider>
            <CartContextProvider>
                <ProductsContextProvider>
                    <CategoryContextProvider>
                        <Outlet />
                    </CategoryContextProvider>
                </ProductsContextProvider>
            </CartContextProvider>
        </AuthContextProvider>
    );
};

export default RootLayout;
