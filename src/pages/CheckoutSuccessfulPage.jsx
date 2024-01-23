import { Link } from "react-router-dom";
import { FaLongArrowAltLeft } from 'react-icons/fa';

const CheckoutSuccessfulPage = () => {
    return (
        <div className='h-[750px] w-screen flex justify-center items-center flex-col gap-8'>
            <h1 className='text-4xl font-semibold text-slate-600'>
                Purchase successful!
            </h1>
            <p>Thank you for shopping with us!</p>
            <Link
                to='/'
                className='flex items-center gap-2 mt-6 ml-4 text-sm italic transition hover:-translate-x-2 hover:text-orange-700'>
                <span aria-hidden='true'>
                    <FaLongArrowAltLeft />
                </span>
                Back to products
            </Link>
        </div>
    );
};

export default CheckoutSuccessfulPage;
