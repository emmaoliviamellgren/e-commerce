import { useContext, React } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    const { products } = useContext(ProductsContext);

    return (
        <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 m-14'>
            {products &&
                products.map((product) => {
                    return <ProductCard key={product._id} product={product}/>
                })}
        </div>
    );
};
export default ProductGrid;
