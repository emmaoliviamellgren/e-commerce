import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='bottom-0 w-full flex items-center justify-around h-28 border-t border-slate-300'>
            <div>
                <h2 className='transition-colors hover:text-orange-700'>Emmas-commerce</h2>
                <p className='text-xs transition-all hover:text-orange-700'>Made with ❤</p>
            </div>
            <Link
                to='/contact'
                className='text-sm hover:border-b border-neutral-600'>
                Get in Touch
            </Link>
            <div className='social-icons flex gap-2'>
                <Link
                    to='#'
                    className='transition hover:text-orange-700 hover:scale-125'>
                    <FaInstagram />
                </Link>
                <Link
                    to='#'
                    className='transition hover:text-orange-700 hover:scale-125'>
                    <FaFacebookF />
                </Link>
                <Link
                    to='#'
                    className='transition hover:text-orange-700 hover:scale-125'>
                    <FaXTwitter />
                </Link>
            </div>
        </div>
    );
};
export default Footer;
