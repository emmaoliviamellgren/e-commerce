import { SiSinglestore } from 'react-icons/si';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import ShoppingCartButton from './ShoppingCartButton';
import UserButton from './UserButton';
import UserButtonLoggedIn from './UserButtonLoggedIn';

const Navbar = () => {
    const { logout } = useAuth();

    const isAuthorized = localStorage.getItem('accessToken');

    return (
        <div className='w-full flex items-center justify-around h-24 border-b border-slate-300'>
            <NavLink
                to='/'
                className='flex items-center gap-2 text-xl transition hover:text-orange-700 hover:translate-y-1 p-2'>
                <SiSinglestore />
                <h1>Emmas-Commerce</h1>
            </NavLink>
            <ul className='flex gap-6 nowrap items-center focus-visible:outline-none'>
                <li>
                    {isAuthorized ? <UserButtonLoggedIn /> : <UserButton />}
                </li>
                <li>
                    <ShoppingCartButton />
                </li>
                {isAuthorized && (
                    <li>
                        <button onClick={() => logout()} className='bg-orange-700 hover:bg-opacity-75 transition text-white hover:text-blue-900 px-3 py-1'>Log out</button>
                    </li>
                )}
            </ul>
        </div>
    );
};
export default Navbar;
