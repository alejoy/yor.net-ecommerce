import { useState, createContext} from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([]);

    const addItem = (itemToAdd) => {
        if(!isInCart(itemToAdd.id)){
            setCartList([...cartList, itemToAdd]);
        }
    }

    const isInCart = (itemId) =>{
        return cartList.some(cartItem => cartItem.id === itemId);
    }

    const removeItem = (itemId) => {
        const updatedCartList = cartList.filter(cartItem => cartItem.id !== itemId);
        setCartList(updatedCartList);
    }

    const clearCart = () => {
        setCartList([]);
    }
    
    const getQuantity = () => {
        let quantity = 0;
        cartList.forEach(cartItem => {quantity += cartItem.count});
        return quantity;
    }

    const getTotal = () => {
        let total = 0;
        cartList.forEach(cartItem => total += (cartItem.price * cartItem.count))
        return total;
    }

    return (
        <CartContext.Provider value ={{cartList, addItem, getTotal, isInCart, removeItem, clearCart, getQuantity}}>
            {children}
        </CartContext.Provider>
    )

}