import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='bottom-0 w-full flex items-center justify-around h-28 border-t border-slate-300'>
            <div className='search'>E-commerce</div>
            <div className='social-icons flex gap-2'>
                <FaInstagram />
                <FaFacebookF />
                <FaXTwitter />
            </div>
        </div>
    );
};
export default Footer;
