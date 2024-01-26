import { Link, useNavigate } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useContext, useState } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { ProductsContext } from '../../contexts/ProductsContext';

const CheckoutPage = () => {
    const { products } = useContext(ProductsContext);
    const { cartItems, addToCart, removeFromCart, clearCart, getCartTotal } =
        useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400 mx-6 my-14 md:mx-auto max-w-2xl items-center px-4 sm:px-6 lg:max-w-3xl lg:px-8'>
            <div className='flex-1 overflow-y-auto px-4 py-6 sm:px-6'>
                <div className='flex items-start justify-between'>
                    <div className='text-lg font-medium text-gray-900'>
                        Shopping cart
                    </div>
                    <button
                        className='text-sm font-medium text-orange-600 hover:opacity-75'
                        onClick={() => clearCart()}>
                        Clear shopping cart
                    </button>
                </div>

                <div className='mt-8'>
                    <div className='flow-root'>
                        <ul
                            role='list'
                            className='-my-6 divide-y divide-gray-200'>
                            {cartItems.map((item) => (
                                <li
                                    key={item._id}
                                    className='flex pt-6 pb-2'>
                                    <div className='h-24 w-24 overflow-hidden rounded-md border border-gray-200 shadow-md'>
                                        <img
                                            src={item.images[0]}
                                            alt={item.name}
                                            className='h-full w-full object-cover object-center'
                                        />
                                    </div>

                                    <div className='ml-4 flex flex-1 flex-col'>
                                        <div>
                                            <div className='flex justify-between text-base font-medium text-gray-900'>
                                                <h3>
                                                    <Link
                                                        to={`/product/${item._id}`}
                                                        className='hover:underline'>
                                                        {item.name}
                                                    </Link>
                                                </h3>
                                                <p className='ml-4 font-semibold'>
                                                    {item.price}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='flex items-end text-sm'>
                                            {/* Item Quantity */}
                                            <div className='flex flex-col my-6 gap-4 w-full'>
                                                <p
                                                    className={`text-gray-500 p-2 bg-slate-200 rounded-lg font-semibold ${
                                                        item.quantity > 1
                                                            ? `w-16`
                                                            : `w-14`
                                                    }`}>
                                                    Qty: {item.quantity}
                                                </p>
                                                <div className='flex gap-2 justify-between'>
                                                    {/* Buttons */}
                                                    <div>
                                                        <button
                                                            className='px-4 py-1 rounded-md border border-gray-200 shadow-md'
                                                            onClick={() => {
                                                                removeFromCart(
                                                                    item
                                                                );
                                                            }}>
                                                            -
                                                        </button>
                                                        <button
                                                            className='px-4 py-1 rounded-md border border-gray-200 shadow-md'
                                                            onClick={() => {
                                                                addToCart(item);
                                                            }}>
                                                            +
                                                        </button>
                                                    </div>
                                                    {/* Remove from cart */}
                                                    <button
                                                        type='button'
                                                        onClick={() =>
                                                            removeFromCart(item)
                                                        }
                                                        className='font-medium text-orange-600 hover:opacity-75'>
                                                        Remove
                                                    </button>
                                                </div>
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
                {cartItems.length > 0 ? (
                    <>
                        <div className='flex justify-between text-base font-medium text-gray-900'>
                            <p>Subtotal</p>
                            <p>{getCartTotal()} SEK</p>
                        </div>
                        <div className='my-6 flex justify-center'>
                            <button
                                onClick={() => {
                                    clearCart();
                                    navigate('/checkoutsuccessfull');
                                }}
                                className='text-center mx-auto text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide w-1/3'>
                                Checkout
                            </button>
                        </div>
                        <div className='mt-6 flex justify-center text-center text-sm text-gray-500'>
                            <span className='flex flex-nowrap gap-x-1 items-center'>
                                <span>or</span>
                                <Link
                                    to='/'
                                    className='font-medium text-orange-600 hover:underline'>
                                    Continue Shopping
                                </Link>
                                <span aria-hidden='true'>
                                    <FaLongArrowAltRight />
                                </span>
                            </span>
                        </div>
                    </>
                ) : (
                    <p className='text-center italic'>
                        Your shopping cart is empty.
                    </p>
                )}
            </div>
        </div>
    );
};

export default CheckoutPage;
