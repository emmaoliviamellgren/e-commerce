import { NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FaUser } from 'react-icons/fa';
import { FiLogIn } from 'react-icons/fi';

const UserButtonLoggedIn = () => {
    return (
        <Popover className='relative'>
            {() => (
                <>
                    <Popover.Button className='focus-visible:outline-none'>
                        <span>
                            <FaUser className='text-2xl outline-none transition hover:text-orange-700' />
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
                        <Popover.Panel className='absolute left-1/2 z-10 mt-3 w-[180px] max-w-sm lg:max-w-2xl -translate-x-24 md:-translate-x-1/2 transform px-4 sm:px-0 focus-visible:outline-none'>
                            <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400'>
                                <div className='bg-gray-50 p-4 text-center flex flex-col gap-y-2'>
                                    <NavLink
                                        to='/private/orderhistory'
                                        className='text-sm font-semibold transition outline-none hover:text-orange-700 flex flex-row gap-x-2 items-center justify-center'>
                                        <FiLogIn className='text-xl' />
                                        <p>Order History</p>
                                    </NavLink>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>
                </>
            )}
        </Popover>
    );
};
export default UserButtonLoggedIn;
