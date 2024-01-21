import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

const CheckoutPage = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400 mx-6 my-14 md:mx-auto max-w-2xl items-center px-4 sm:px-6 lg:max-w-3xl lg:px-8'>
            <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                <div className='flex items-start justify-between'>
                    <div className='text-lg font-medium text-gray-900'>
                        Shopping cart
                    </div>
                </div>

                <div className='mt-8'>
                    <div className='flow-root'>
                        <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'>
                            {products.map((product) => (
                                <li
                                    key={product._id}
                                    className='flex py-6'>
                                    <div className='h-24 w-24 overflow-hidden rounded-md border border-gray-200 shadow-md'>
                                        <img
                                            src={product.images[0]}
                                            alt={product.name}
                                            className='h-full w-full object-cover object-center'
                                        />
                                    </div>

                                    <div className='ml-4 flex flex-1 flex-col'>
                                        <div>
                                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                                <h3>
                                                    <Link
                                                        to={`/product/${product._id}`}
                                                        className='hover:underline'>
                                                        {product.name}
                                                    </Link>
                                                </h3>
                                                <p className='ml-4 font-semibold'>
                                                    {product.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex justify-end mt-12 text-sm'>
                                            {/* <p className='text-gray-500'>
                                                Qty {product.quantity}
                                            </p> */}

                                            <div className='flex'>
                                                <button
                                                    type='button'
                                                    className='font-medium text-orange-600 hover:opacity-75'>
                                                    Remove
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='border-t border-gray-200 px-4 py-6 sm:px-6'>
                <div className='flex justify-between text-base font-medium text-gray-900'>
                    <p>Subtotal</p>
                    <p>$262.00</p>
                </div>
                <p className='mt-0.5 text-sm text-gray-500'>
                    Shipping and taxes calculated at checkout.
                </p>
                <div className='my-6 flex justify-center'>
                    <Link
                        to='#'
                        className='text-center mx-auto text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide w-1/3'>
                        Checkout
                    </Link>
                </div>
                <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                    <span className='flex flex-nowrap gap-x-1 items-center'>
                        <span>or</span>
                        <Link
                            to='#'
                            className='font-medium text-orange-600 hover:underline'>
                            Continue Shopping
                        </Link>
                        <span aria-hidden='true'>
                            <FaLongArrowAltRight />
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
