const Order = (props) => {
    const products = props.order.products;

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

    return (
        <>
            {products.map((productItem) => (
                <div
                    key={productItem.product._id}
                    className='group relative'>
                    <div className='w-full overflow-hidden rounded-md bg-gray-200'>
                        <img
                            src={productItem.product.images[0]}
                            alt={productItem.product.name}
                            className='h-full w-full object-contain'
                        />
                    </div>
                    <div className='mt-4 flex justify-between'>
                        <div>
                            <h3 className='text-sm text-gray-700'>
                                <span
                                    aria-hidden='true'
                                    className='absolute inset-0'
                                />
                                {productItem.product.name}
                            </h3>
                            <p className='mt-1 text-sm text-gray-500'>
                            Qty: {productItem.quantity}
                            </p>
                        </div>
                        <p className='text-sm font-medium text-gray-900'>
                            {productItem.product.price}
                        </p>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Order;
