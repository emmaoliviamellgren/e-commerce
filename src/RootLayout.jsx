import { Outlet } from 'react-router-dom';

// Contexts
import ProductsContextProvider from './contexts/ProductsContext';
import CartContextProvider from './contexts/CartContext';
import CategoryContextProvider from './contexts/CategoryContext';
import AuthContextProvider from './contexts/AuthContext';
import OrderContextProvider from './contexts/OrderContext';

const RootLayout = () => {
    return (
        <AuthContextProvider>
            <CartContextProvider>
                <ProductsContextProvider>
                    <OrderContextProvider>
                        <CategoryContextProvider>
                            <Outlet />
                        </CategoryContextProvider>
                    </OrderContextProvider>
                </ProductsContextProvider>
            </CartContextProvider>
        </AuthContextProvider>
    );
};

export default RootLayout;
