import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const API_KEY = 'https://js2-ecommerce-api.vercel.app/api/products';
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_KEY)
            .then((response) => {
                if (!response.ok) {
                    console.log('Something went wrong.' + response.status);
                    return;
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, [API_KEY]);

    return (
        <ProductsContext.Provider value={{products}}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;