import { useEffect } from 'react';
import { OrderContext, useOrderContext } from '../../contexts/OrderContext';
import Order from '../../components/Order';

const OrderHistoryPage = () => {
    const { orderHistory, fetchOrders, totalPrice, totalQuantity } =
        useOrderContext(OrderContext);

    useEffect(() => {
        if (orderHistory !== null)
        fetchOrders();
    }, []);

    // Sort orders from newest to oldest
    const orders = orderHistory.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    if (!orders) {
        return (
        <div className='h-screen w-screen flex items-center justify-center'>
            <div className='text-center my-8 text-2xl'>Loading...</div>
        </div>
        )
    }

    return (
        <div className='mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl tracking-tight text-gray-700 mb-4'>
                Order history
            </h2>
            {orderHistory.length === 0 && <p className='mt-8 text-sm italic text-gray-400 font-bold'>You have no previous orders.</p>}
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
