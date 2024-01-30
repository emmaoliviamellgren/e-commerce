import { useContext } from 'react';
import { OrderContext } from '../../contexts/OrderContext';
import { CartContext } from '../../contexts/CartContext';

const OrderHistoryPage = () => {
    const { purchasedItems } = useContext(CartContext);
    const { orderHistory } = useContext(OrderContext)

    return (
        <div className='mx-auto my-20 w-[28rem] lg:w-[60rem] px-16 xl:px-56 py-20 border border-slate-300 shadow-md shadow-slate-400 bg-white rounded-lg'>
            <h1 className='text-center text-xl'>Order history</h1>
            {orderHistory && <li>{orderHistory}</li>}
        </div>
    );
};

export default OrderHistoryPage;
