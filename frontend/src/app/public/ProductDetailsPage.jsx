import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Contexts
import { ProductsContext } from '../../contexts/ProductsContext';
import { CartContext } from '../../contexts/CartContext';

const ProductDetailsPage = () => {
    const { products } = useContext(ProductsContext);
    const { cartItems, addToCart } = useContext(CartContext);
    const { _id } = useParams();

    // Render product
    const product = products?.find((product) => product._id === _id);

    if (!product) {
        return (
        <div className='h-screen flex items-center justify-center'>
            <div className='text-center my-8 text-2xl'>Loading...</div>
        </div>
        )
    }

    // Alert when add to cart button is clicked
    const alert = () =>
        toast('Item added to cart!', {
            position: 'top-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
            transition: Bounce,
        });

    return (
        <div className='rounded-lg bg-white overflow-hidden border border-slate-300 shadow-md shadow-slate-400 mx-6 my-14 md:mx-auto max-w-2xl items-center px-4 sm:px-6 lg:max-w-6xl lg:px-8'>
            <Link
                to='/'
                className='flex items-center gap-2 mt-6 ml-4 text-sm italic transition hover:-translate-x-2 hover:text-orange-700'>
                <span aria-hidden='true'>
                    <FaLongArrowAltLeft />
                </span>
                Back to products
            </Link>
            <div className='flex flex-col lg:flex-row'>
                {/* Image gallery */}
                <div className='grid grid-cols-1 m-6 lg:m-14'>
                    {/* Initial image */}
                    <div className='max-w-xl overflow-hidden'>
                        <img
                            src={product.images[0]}
                            alt={product.name}
                            className='w-full'
                        />
                    </div>
                    {/* Rest of images, rendered if they exist */}
                    <div className='max-w-xl overflow-hidden grid grid-cols-1 lg:grid-cols-3 p-6'>
                        {product.images[1] && (
                            <img
                                src={product.images[1]}
                                alt={product.name}
                            />
                        )}
                        {product.images[2] && (
                            <img
                                src={product.images[2]}
                                alt={product.name}
                            />
                        )}
                        {product.images[3] && (
                            <img
                                src={product.images[3]}
                                alt={product.name}
                            />
                        )}
                    </div>
                </div>
                {/* Text box */}
                <div className='flex flex-col mb-12 lg:mb-0 lg:gap-y-6 justify-center'>
                    <div className='mb-12 lg:mb-0 w-[400px] bg-slate-100 p-8 rounded-lg'>
                        <h3 className='text-2xl text-gray-700'>
                            {product.name}
                        </h3>
                        <p className='pt-2 text-xl font-semibold text-gray-900'>
                            {product.price}
                        </p>
                        <p className='pt-6 text-sm text-gray-900 line-clamp-[10]'>
                            {product.description}
                        </p>
                    </div>
                    <button
                        onClick={() => {
                            addToCart(product);
                            alert();
                        }}
                        className='text-center mx-auto text-sm bg-orange-700 text-white transition hover:opacity-75 px-4 py-2 rounded-md shadow-md shadow-orange-400 tracking-wide w-1/3'>
                        Add to cart
                    </button>
                    <ToastContainer
                        position='top-center'
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme='light'
                        transition={Bounce}
                    />
                </div>
            </div>
        </div>
    );
};

export default ProductDetailsPage;
