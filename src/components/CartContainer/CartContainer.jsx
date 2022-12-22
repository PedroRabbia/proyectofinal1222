import './cartContainer.css';
import { BiErrorCircle } from 'react-icons/bi';
import { CartContext } from '../../context/CartContext';
import { CartListContainer } from '../CartListContainer/CartListContainer';
import { LinkContainer } from 'react-router-bootstrap';
import { useContext } from 'react';


export const CartContainer = () => {
    const { cartList } = useContext(CartContext);

    document.title = "Carrito – Batuk";
    
    return(
        <div>
            <h1 className=' heading-2'>Carrito</h1>
            { cartList.length !== 0 ? 
                <CartListContainer /> : 
                <div className='cart-noproducts'>
                    <p className='info'>Tu carrito está vacío. <BiErrorCircle/></p>
                    <LinkContainer to='/'>
                        <button className='btn btn-info'>Volver a la tienda</button>
                    </LinkContainer>
                </div>
            }
        </div>
    );
}