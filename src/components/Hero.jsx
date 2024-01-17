import img from '../assets/computer.jpeg'

const Hero = () => {
    return (
        <div className="w-full h-[500px] bg-slate-300">
            <div className='h-full bg-cover' style={{backgroundImage: `url(${img})`}}>
                <h1 className='text-2xl absolute top-1/2 left-2/3'>Buy our products</h1>
            </div>
        </div>
    )
}
export default Hero