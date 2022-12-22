import './itemCart.css';

export const ItemCart = ({item, removeCart}) => {
    return(
        <div className='cart-item'>
            <button onClick={() => removeCart(item.id)} className='btn-cart-delete'>x</button>
            <img src={item.image} alt='producto'/>
            <h4>{item.title}</h4>
            <p>Precio: ${item.price}</p>
            <p>{item.quantity}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
        </div>
    );
}