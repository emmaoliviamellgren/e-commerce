import { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

const ProductsContextProvider = ({ children }) => {
    const API_KEY = `${process.env.REACT_APP_BACKEND_URL}/api/products`;
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(API_KEY)
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Something went wrong');
                }
                return response.json();
            })
            .then((data) => {
                setProducts(data);
            });
    }, [API_KEY]);

    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    );
};

export default ProductsContextProvider;
