import { createContext, useEffect, useState } from 'react';
import { errorNotif, successNotif} from '../helper/helper';

export const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartList, setCartList] = useState(JSON.parse(localStorage.getItem('cart')) || []);

    const [cartQty, setCartQty] = useState(0);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartList));
    },[cartList,cartQty]);

    const isInCart = (product) => {
        return cartList.some((item) => item.id === product.id);
    }

    const addCart = (product, quantity) => {
        const newProduct = {...product, quantity: quantity};

        if (isInCart(newProduct)) {
            const productInCart = cartList.find((item) => item.id === newProduct.id);
            if ( productInCart.quantity + quantity <= product.stock) {
                productInCart.quantity += quantity;
                setCartQty(cartQty + quantity);
                successNotif('Agregaste productos al carrito ');
            } else {
                errorNotif('Stock no disponible ');
            }
        } else {
            const newCartList = [...cartList, newProduct];
            setCartQty(cartQty + quantity);
            setCartList(newCartList); 
            successNotif('Agregaste productos al carrito ');
        }
    }

    const removeCart = (productId) => {
        const newCartList = cartList.filter((item) => item.id !== productId );
        setCartList(newCartList);
    }

    const clearCart = () => {
        setCartList([]);
        setCartQty(0);
    }

    const getTotalPrice = () => {
        return cartList.reduce((acc,item) => acc + item.price * item.quantity,0);
    }

    const getTotalItems = () => {
        return cartList.reduce((acc,item) => acc + item.quantity,0);
    }

    return(
        <CartContext.Provider value={{cartList,addCart,removeCart,getTotalPrice,clearCart, getTotalItems}}>
            {children}
        </CartContext.Provider>
    );
}