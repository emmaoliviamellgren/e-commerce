import { Popover, Transition } from '@headlessui/react';
import { LuShoppingCart } from 'react-icons/lu';
import { FaShoppingCart } from 'react-icons/fa';
import { CartContext } from '../contexts/CartContext';
import { Fragment, useContext } from 'react';
import { NavLink } from 'react-router-dom';

const ShoppingCartButton = () => {

    const { cartItems, addToCart, displayAmountOfItems } =
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
                        <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-[180px] max-w-sm lg:max-w-2xl -translate-x-24 md:-translate-x-1/2 transform px-4 sm:px-0'>
                            <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400'>
                                <div className='bg-gray-50 p-4 text-center'>
                                    {cartItems.length > 0 ? (
                                        <NavLink
                                            to='/checkout'
                                            className='flex gap-1 justify-center items-center text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide'>
                                            <span>Checkout</span>
                                            <FaShoppingCart />
                                        </NavLink>
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
