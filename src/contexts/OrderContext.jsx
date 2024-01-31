import { createContext, useContext, useState, useEffect } from 'react';

export const OrderContext = createContext();

const OrderContextProvider = ({ children }) => {
    const [orderHistory, setOrderHistory] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalQuantity, setTotalQuantity] = useState(0);

    const sumOfQuantity = (data) => {
        return data.reduce((total, order) => {
            const orderTotal = order.products.reduce((orderTotal, product) => {
                return orderTotal + product.quantity;
            }, 0);
            return total + orderTotal;
        }, 0);
    };

    const sumOfPrice = (data) => {
        return data.reduce((total, order) => {
            const orderTotal = order.products.reduce((orderTotal, product) => {
                return orderTotal + product.product.price * product.quantity;
            }, 0);
            return total + orderTotal;
        }, 0);
    };

    // Get order history from server

    const fetchOrders = () => {
        const token = localStorage.getItem('accessToken');

        fetch('https://js2-ecommerce-api.vercel.app/api/orders', {
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
                setTotalQuantity(sumOfQuantity(data));
                setTotalPrice(sumOfPrice(data));
                return data;
            })

            .catch((error) => {
                console.error(error);
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
