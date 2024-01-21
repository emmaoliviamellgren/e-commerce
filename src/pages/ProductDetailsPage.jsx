import { useContext } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = () => {
  const { products } = useContext(ProductsContext);
  const { _id } = useParams();

  const product = products?.find((product) => product._id === _id);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='bg-white h-[550px] w-full'>
        <div className='w-2/3'>
          <h3 className='text-sm text-gray-700 hover:text-gray-900'>{product.name}</h3>
        </div>
      </div>        
    </>
  );
};

export default ProductDetailsPage;