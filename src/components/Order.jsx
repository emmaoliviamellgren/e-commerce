const Order = (props) => {
    const products = props.order.products;
    const orderItem = props.order;

    // Display amount of items ordered per order
    const itemsPerOrder = products.reduce((total, productItem) => total + productItem.quantity, 0);

    return (
        <>
            <div className='flex'>
                <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400 my-4 max-w-2xl px-12 lg:max-w-6xl'>
                    <div className='flex flex-col justify-center mt-6 gap-y-2 text-sm text-gray-500'>
                        <div>
                            <span className="font-bold">Total price:</span>{' '}
                            <span>{orderItem.totalPrice}</span>
                        </div>
                        <div>
                            <span className="font-bold">Items ordered:</span>{' '}
                            <span>{itemsPerOrder}</span>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row'>
                        {products.map((productItem) => (
                            <div
                                key={productItem.product._id}
                                className='group relative'>
                                <div className='h-60 w-full overflow-hidden rounded-md'>
                                    <img
                                        src={productItem.product.images[0]}
                                        alt={productItem.product.name}
                                        className='h-full w-full object-contain p-6'
                                    />
                                </div>
                                <div className='my-6 flex justify-around'>
                                    <div>
                                        <span className='text-sm text-gray-700'>
                                            {productItem.product.name}
                                        </span>
                                        <div className='flex justify-between items-center mt-2'>
                                            <span className='text-sm text-gray-500'>
                                                Qty: {productItem.quantity}
                                            </span>
                                            <span className='text-sm font-medium text-gray-900'>
                                                {productItem.product.price} SEK
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Order;

// return (
//     <>
//         {products.map((productItem) => (
//             <li key={productItem.product._id} className="bg-gray-200 p-12">
//                 <p>{productItem.product._id}</p>
//                 <p>{productItem.product.name}</p>
//                 <img
//                     src={productItem.product.images[0]}
//                     alt={productItem.product.name}
//                     className='w-full h-full object-contain'
//                 />
//                 <p>{productItem.product.price}</p>
//                 <p>{productItem.product.quantity}</p>
//             </li>
//         ))}
//     </>
// );
