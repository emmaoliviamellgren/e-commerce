const Order = (props) => {
    const products = props.order.products;
    const orderItem = props.order;

    // Display amount of items ordered per order
    const itemsPerOrder = products.reduce(
        (total, productItem) => total + productItem.quantity,
        0
    );

    return (
        <>
            <div className='flex'>
                <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400 my-4 max-w-2xl lg:max-w-6xl'>
                    <div className='flex flex-col justify-center text-sm text-gray-500'>
                        <div className='border-b-4'>
                            <div className='flex py-4 px-12 bg-gray-200 justify-center gap-x-2'>
                                <span className='font-bold'>Order no:</span>{' '}
                                <span>{orderItem._id}</span>
                            </div>
                            <div className='p-2 flex justify-center gap-x-2'>
                                <span className='font-bold'>Total price:</span>{' '}
                                <span>{orderItem.totalAmount} SEK</span>
                            </div>
                            <div className='p-2 flex justify-center gap-x-2'>
                                <span className='font-bold'>
                                    Items ordered:
                                </span>{' '}
                                <span>{itemsPerOrder}</span>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col lg:flex-row justify-center'>
                        {products.map((productItem) => (
                            <div
                                key={productItem.productId._id}
                                className='group relative'>
                                <div className='h-60 w-full overflow-hidden rounded-md'>
                                    <img
                                        src={productItem.productId.images[0]}
                                        alt={productItem.productId.name}
                                        className='h-full w-full object-contain p-6'
                                    />
                                </div>
                                <div className='my-6 flex justify-around'>
                                    <div>
                                        <span className='text-sm text-gray-700'>
                                            {productItem.productId.name}
                                        </span>
                                        <div className={`flex justify-between items-center mt-2 ${products.length === 1  && `flex-col`}`}>
                                            <span className='text-sm text-gray-500'>
                                                Qty: {productItem.quantity}
                                            </span>
                                            <span className='text-sm font-medium text-gray-900'>
                                                {productItem.productId.price} SEK
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
