import img from '../assets/computer.jpeg';

const Hero = () => {
    return (
        <div className='w-full h-[500px] bg-slate-300 overflow-hidden'>
            <div
                className='h-full bg-cover'
                style={{ backgroundImage: `url(${img})` }}>
                <h1 className='max-w-2 lg:max-w-none text-2xl relative top-1/2 left-2/3'>
                    Buy our products
                </h1>
            </div>
        </div>
    );
};
export default Hero;
