import './itemDetail.css';
import { BiBox } from 'react-icons/bi';
import { CartContext } from '../../context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer } from 'react-toastify';
import { useContext } from 'react';
import { useState } from 'react';

export const ItemDetail = ({item}) => {
    const { addCart } = useContext(CartContext);
    
    const [isAdded, setIsAdded ] = useState(false);

    const addProducts = (items) => {
        setIsAdded(true);
        addCart(item, items);
    }

    return(
        <div className='detail-container'>
            <img src={item.image} className='detail-img' alt='Imagen'/>
            <div className='detail-content'>
                <h2 className='detail-content__name'>{item.title}</h2>
                <p className='detail-content__description'>{item.description}</p>
                <p className='fw-bold'><i className='me-2 fs-3'><BiBox/></i>Disponibles: {item.stock}</p>
                <p className='detail-content__price'>${item.price}</p>
                {
                    isAdded ? 
                    <div className='detail-options'>
                        <LinkContainer to='/'><button className='btn btn-dark mb-4 p-2 me-4'>Seguir comprando</button></LinkContainer>
                        <LinkContainer to='/cart'>
                        <button className='btn btn-success mb-4 p-2'>Ver carrito</button></LinkContainer>
                    </div> : 
                    <ItemCount initial={item.stock === 0 ? 0 : 1} stock={item.stock} onAdd={addProducts}/>
                }
                <ToastContainer/>
            </div>
        </div>
    );
}