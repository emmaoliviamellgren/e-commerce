import { Link } from 'react-router-dom';
import img from '../assets/computer.jpeg';

const Hero = () => {
    return (
        <div className='w-full h-[500px] bg-slate-300 overflow-hidden'>
            <div
                className='h-full bg-cover'
                style={{ backgroundImage: `url(${img})` }}>
                <div className='max-w-2 lg:max-w-none relative top-1/2 left-2/3'>
                    <h1 className='text-2xl'>Browse the products</h1>
                    <h2 className='text-sm py-4'>Or <Link
                        to='/contact'
                        className='text-sm hover:underline text-orange-600'>
                        Get in Touch
                    </Link></h2>
                </div>
            </div>
        </div>
    );
};
export default Hero;
