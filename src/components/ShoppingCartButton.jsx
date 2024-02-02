import { Popover, Transition } from '@headlessui/react';
import { LuShoppingCart } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { Fragment, useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';

const ShoppingCartButton = () => {
    const { cartItems, addToCart, removeFromCart, displayAmountOfItems } =
        useContext(CartContext);

    return (
        <Popover className='relative'>
            {() => (
                <>
                    <Popover.Button>
                        <span>
                            <LuShoppingCart className='text-2xl outline-none transition hover:text-orange-700' />
                            {displayAmountOfItems() > 0 && (
                                <span className='absolute bottom-3'>
                                    <span className='text-sm font-semibold bg-red-400 bg-opacity-50 w-[40px] text-center rounded-full inline-block mr-[5px] leading-[40px]'>
                                        {displayAmountOfItems()}
                                    </span>
                                </span>
                            )}
                        </span>
                    </Popover.Button>
                    <Transition
                        as={Fragment}
                        enter='transition ease-out duration-200'
                        enterFrom='opacity-0 translate-y-1'
                        enterTo='opacity-100 translate-y-0'
                        leave='transition ease-in duration-150'
                        leaveFrom='opacity-100 translate-y-0'
                        leaveTo='opacity-0 translate-y-1'>
                        <Popover.Panel className='absolute z-10 mt-3 w-96 max-w-sm lg:max-w-2xl -translate-x-24 md:-translate-x-1/2 transform px-4 sm:px-0'>
                            <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400'>
                                <div className='bg-gray-50 p-4 flex flex-col'>
                                    {/* If there are items in cart, display them */}
                                    {cartItems.length > 0 ? (
                                        <>
                                            <ul role='list' className={`${cartItems.length > 1} && divide-y divide-gray-200`}>
                                                {cartItems.map((item) => (
                                                    <li
                                                        key={item._id}
                                                        className='flex w-full'>
                                                        <div className='h-16 w-16 overflow-hidden rounded-md border border-gray-200 shadow-md mt-3'>
                                                            <img
                                                                src={
                                                                    item
                                                                        .images[0]
                                                                }
                                                                alt={item.name}
                                                                className='h-16 w-16 object-contain'
                                                            />
                                                        </div>

                                                        <div className='flex flex-col ml-4 my-3'>
                                                            <div className='text-xs font-medium text-gray-900'>
                                                                <p>
                                                                    <Link
                                                                        to={`/product/${item._id}`}
                                                                        className='hover:underline'>
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </Link>
                                                                </p>
                                                                <p className=' font-semibold text-sm mt-2'>
                                                                    {item.price} SEK
                                                                </p>
                                                            </div>
                                                            <div className='flex text-xs items-center justify-between w-full'>
                                                                {/* Item Quantity */}
                                                                <div className='flex items-center justify-between my-3 gap-4'>
                                                                    <p
                                                                        className='text-gray-500 p-2 bg-slate-200 rounded-lg font-semibold w-13
                                                                '>
                                                                        Qty:{' '}
                                                                        {
                                                                            item.quantity
                                                                        }
                                                                    </p>
                                                                    <div className='flex gap-1'>
                                                                        {/* Buttons */}
                                                                        <button
                                                                            className='px-3 py-1 rounded-md border border-gray-200 shadow-md'
                                                                            onClick={() => {
                                                                                removeFromCart(
                                                                                    item
                                                                                );
                                                                            }}>
                                                                            -
                                                                        </button>
                                                                        <button
                                                                            className='px-3 py-1 rounded-md border border-gray-200 shadow-md'
                                                                            onClick={() => {
                                                                                addToCart(
                                                                                    item
                                                                                );
                                                                            }}>
                                                                            +
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                            <NavLink
                                                to='/checkout'
                                                className='flex gap-1 justify-center items-center text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide'>
                                                <span>Checkout</span>
                                                <FaShoppingCart />
                                            </NavLink>
                                        </>
                                    ) : (
                                        <p className='text-sm text-gray-300'>
                                            Your cart is empty
                                        </p>
                                    )}
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};
export default ShoppingCartButton;
