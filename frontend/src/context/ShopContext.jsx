import { createContext, useState } from 'react';
import { products } from '../assets/assets';

const ShopContext = createContext();
const ShopContextProvider = (props) => {
    const currency = '₹';
    const delivery_fee = 50;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    
    const addToCart = async (productId, quantity) => {
        setCartItems((prevCartItems) => {
            const updatedCartItems = { ...prevCartItems };
            updatedCartItems[productId] = (updatedCartItems[productId] || 0) + quantity;
            return updatedCartItems;
        });
    };

    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        setCartItems
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
export { ShopContext, ShopContextProvider };