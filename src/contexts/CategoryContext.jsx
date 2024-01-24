import { createContext, useState, useContext, useEffect } from 'react';
import { ProductsContext } from '../contexts/ProductsContext';

export const CategoryContext = createContext();

const CategoryContextProvider = ({ children }) => {
    const { products } = useContext(ProductsContext);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    const API_KEY = `https://js2-ecommerce-api.vercel.app/api/products`;

    // Fetching categories from API
        useEffect(() => {
            fetch(API_KEY)
                .then((response) => response.json())
                .then((data) => {
                    // Using Set constructor to remove category duplicates
                    const categoryList = [...new Set(data.map(item => item.category))];
                    setCategories(categoryList);
                });
        }, [API_KEY]);

    // Adding categories
    const addCategory = (category) => {
        if (!selectedCategories.includes(category)) {
            setSelectedCategories((prev) => [...prev, category]);
        }
    };

    // Removing categories
    const removeCategory = (category) => {
        if (selectedCategories.includes(category)) {
            let renderRemove = selectedCategories.filter(
                (product) => product !== category
            );
            setSelectedCategories(renderRemove);
        }
    };

    // Resetting category list
    const resetCategories = () => {
        setSelectedCategories([]);
    };

    // Filtering products
    // Listening if selected categories and products changes - will then execute filtering function
    useEffect(() => {
        if (selectedCategories.length === 0) {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(
                products.filter((product) =>
                    selectedCategories.includes(product.category)
                )
            );
        }
    }, [selectedCategories, products]);

    return (
        <CategoryContext.Provider
            value={{
                addCategory,
                removeCategory,
                resetCategories,
                selectedCategories,
                categories,
                filteredProducts
            }}>
            {children}
        </CategoryContext.Provider>
    );
};

export default CategoryContextProvider;
