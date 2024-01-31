import { useContext, useEffect } from 'react';
import { OrderContext, useOrderContext } from '../../contexts/OrderContext';
import Order from '../../components/Order';

const OrderHistoryPage = () => {
    const { orderHistory, fetchOrders, totalPrice, totalQuantity } =
        useOrderContext(OrderContext);

    useEffect(() => {
        fetchOrders();
    }, []);

    // return (
    //     <div className='mx-auto my-20 w-[28rem] lg:w-[60rem] px-16 xl:px-56 py-20 border border-slate-300 shadow-md shadow-slate-400 bg-white rounded-lg'>
    //         <h1 className='text-center text-xl'>Order history</h1>
    //         <ul>
    //             {orderHistory &&
    //                 orderHistory.map((order) => {
    //                     return (
    //                         <OrderItem
    //                             order={order}
    //                             key={order._id}
    //                         />
    //                     );
    //                 })}
    //         </ul>
    //         <ul className='bg-red-200'>
    //             <li>Total Price: {totalPrice}</li>
    //             <li>Total Quantity: {totalQuantity}</li>
    //         </ul>
    //     </div>
    // );

    return (
        <div className='mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8'>
            <h2 className='text-2xl font-bold tracking-tight text-gray-900'>
                Order history
            </h2>

            <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
                {orderHistory &&
                    orderHistory.map((order) => {
                        return (
                            <Order
                                order={order}
                                key={order._id}
                            />
                        );
                    })}
            </div>
            <div>
                Total Price: {totalPrice}
                Total Quantity: {totalQuantity}
            </div>
        </div>
    );
};

export default OrderHistoryPage;
