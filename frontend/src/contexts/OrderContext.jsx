import { createContext, useContext, useState } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    // Get order history from server
    const fetchOrders = () => {

        const token = localStorage.getItem('accessToken');
        
        fetch('/api/orders', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status);
            }
            return response.json();
        })
        .then((data) => {
            setOrderHistory(data);
            return data;
        })
        
        .catch((error) => {
            console.log(error.message);
            });
    };

    return (
        <OrderContext.Provider
            value={{ orderHistory, fetchOrders, totalPrice, totalQuantity }}>
            {children}
        </OrderContext.Provider>
    );
};
export default OrderContextProvider;

export const useOrderContext = () => {
    const context = useContext(OrderContext);

    if (!context)
        throw new Error(
            'useOrderContext must be inside an OrderContextProvider'
        );

    return context;
};
