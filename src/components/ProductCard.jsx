import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400'>
            <div className='border-b border-slate-300 px-6 py-6'>
                <Link to={`/product/${product._id}`}>
                    <h3 className='text-sm text-gray-700 hover:text-gray-900 hover:underline'>
                        {product.name}
                    </h3>
                </Link>
                <p className='pt-2 text-lg font-semibold text-gray-900'>
                    {product.price}
                </p>
            </div>
            <div className='mb-12'>
                <Link to={`/product/${product._id}`}>
                    <img
                        src={product.images[0]}
                        alt={product.name}
                        className='w-full h-full object-contain transition hover:opacity-85'
                    />
                </Link>
            </div>
        </div>
    );
};
export default ProductCard;
