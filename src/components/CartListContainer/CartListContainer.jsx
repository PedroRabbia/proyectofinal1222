import './cartListContainer.css';
import { CartContext } from '../../context/CartContext';
import { ItemCart } from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import { useContext } from 'react';

export const CartListContainer = () => {
    const { cartList, removeCart, getTotalPrice, clearCart } = useContext(CartContext); 
    
    return(
        <>
            <div className='cart-list-container'>
                {
                    cartList.map((item) => <ItemCart key={item.id} item={item} removeCart={removeCart} />)
                }
            </div>
            <p className='cart-list-total'>Total: ${getTotalPrice()}</p>
            <div className='cart-list-options'>
                <button onClick={clearCart} className='btn btn-danger'>Vaciar carrito</button>
                <Link to='/checkout' className='btn btn-dark'>
                    Finalizar compra
                </Link>
            </div>
        </>
    );
}