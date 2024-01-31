import { useEffect } from 'react';
import { OrderContext, useOrderContext } from '../../contexts/OrderContext';
import Order from '../../components/Order';

const OrderHistoryPage = () => {
    const { orderHistory, fetchOrders, totalPrice, totalQuantity } =
        useOrderContext(OrderContext);

    useEffect(() => {
        fetchOrders();
    }, []);

    // Sort orders from newest to oldest
    const orders = orderHistory.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return (
        <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900 mb-4'>
                Order history
            </h2>
                {orders &&
                    orders.map((order) => {
                        return (
                            <Order
                                order={order}
                                key={order._id}
                            />
                        );
                    })}
        </div>
    );
};

export default OrderHistoryPage;
