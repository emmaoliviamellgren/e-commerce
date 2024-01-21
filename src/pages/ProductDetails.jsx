import { useContext, useEffect, useState } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';
import { useParams } from 'react-router-dom';
import Product from '../components/Product';

const ProductDetails = () => {
    const { products } = useContext(ProductsContext);
    const { _id } = useParams();

    const [product, setProduct] = useState();

    useEffect(() => {
      if(_id) {
        const myProduct = products.find((product) => product.id === _id);
        setProduct(myProduct);
      }
    }, [_id]);

    return <>{product && <Product product={product}/>}</>;
};
export default ProductDetails;
