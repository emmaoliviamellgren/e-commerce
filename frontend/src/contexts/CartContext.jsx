import { createContext, useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const API_KEY = 'https://e-commerce-backend-cjxu.onrender.com/api/orders';

    const [cartItems, setCartItems] = useState([]);
    const [purchasedItems, setPurchasedItems] = useState([]);

    const displayAmountOfItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    // Add items to cart
    const addToCart = (item) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem._id === item._id
        ); // check if the item is already in the cart

        if (isItemInCart) {
            setCartItems(
                cartItems.map(
                    (
                        cartItem // if the item is already in the cart, increase the quantity of the item
                    ) =>
                        cartItem._id === item._id
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem // otherwise, return the cart item
                )
            );
        } else {
            setCartItems([...cartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
        }
    };

    // Remove items from cart
    const removeFromCart = (item) => {
        const isItemInCart = cartItems.find(
            (cartItem) => cartItem._id === item._id
        );

        if (isItemInCart.quantity === 1) {
            setCartItems(
                cartItems.filter((cartItem) => cartItem._id !== item._id)
            ); // if the quantity of the item is 1, remove the item from the cart
        } else {
            setCartItems(
                cartItems.map((cartItem) =>
                    cartItem._id === item._id
                        ? { ...cartItem, quantity: cartItem.quantity - 1 } // if the quantity of the item is greater than 1, decrease the quantity of the item
                        : cartItem
                )
            );
        }
    };

    // Clear cart
    const clearCart = () => {
        setCartItems([]); // Set cart items to an empty array
    };

    // Calculate the total sum of items in cart
    const getCartTotal = () => {
        return cartItems.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        ); // calculate the total price of the items in the cart
    };

    // Post purchased products to server
    const orders = () => {
        const token = localStorage.getItem('accessToken');
        // Decode the token and extract the user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken._id;

        const products = cartItems.map((product) => ({
            productId: product._id,
            quantity: product.quantity,
        }));

        fetch(API_KEY, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ user: userId, products }),
        })
            .then((response) => {
                if (response.status !== 201) {
                    throw new Error();
                }
                return response.json();
            })
            .then(() => {
                console.log('Purchase successful!');
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <CartContext.Provider
            value={{
                orders,
                cartItems,
                purchasedItems,
                addToCart,
                removeFromCart,
                clearCart,
                getCartTotal,
                displayAmountOfItems,
            }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
