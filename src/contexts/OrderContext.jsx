import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { CartContext } from './CartContext';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const API_KEY = 'https://js2-ecommerce-api.vercel.app/api/orders';
    const [orderHistory, setOrderHistory] = useState([]);

    const getToken = localStorage.getItem('accessToken');

    // Get order history from server
    fetch(API_KEY, {
        headers: {
            Authorization: `Bearer ${getToken}`,
        },
    })
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error();
            }
        })
        .then((data) => {
            setOrderHistory(data);
            console.log(data);
        })

        .catch((error) => {
            console.error('Error fetching order history:', error);
        });

    return (
        <OrderContext.Provider value={orderHistory}>
            {children}
        </OrderContext.Provider>
    );
};
export default OrderContextProvider;
