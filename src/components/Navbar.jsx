import { Popover, Transition } from '@headlessui/react';
import { NavLink, Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

// Icons
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { SiSinglestore } from 'react-icons/si';
import { LuShoppingCart } from 'react-icons/lu';
import { Fragment, useContext, useState } from 'react';

const Navbar = () => {
    const { cartItems, addToCart, displayAmountOfItems } =
        useContext(CartContext);

    return (
        <div className='w-full flex items-center justify-around h-24 border-b border-slate-300'>
            <NavLink
                to='/'
                className='flex items-center gap-2 text-xl transition hover:text-orange-700 hover:translate-y-1 p-2'>
                <SiSinglestore />
                <h1>E-Commerce</h1>
            </NavLink>
            <ul className='flex gap-6 nowrap items-center'>
                <li>
                    <NavLink
                        to='/checkout'
                        className='text-2xl'>
                        <FaUser />
                    </NavLink>
                </li>
                <li>
                    <Popover className='relative'>
                        {() => (
                            <>
                                <Popover.Button>
                                    <span>
                                        <LuShoppingCart className='text-2xl outline-none' />
                                        {displayAmountOfItems() > 0 && (
                                            <span className='text-sm font-semibold absolute left-4 bottom-5 bg-red-400 h-6 w-6 rounded-full'>
                                                <span className='absolute -translate-x-1 translate-y-0.5'>
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
                                                    <p className='text-xs'>
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
                </li>
            </ul>
        </div>
    );
};
export default Navbar;
