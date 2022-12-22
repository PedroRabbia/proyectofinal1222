import './cartWidget.css';
import { CartContext} from '../../context/CartContext';
import { useContext } from 'react';

export const CartWidget = () => {
    const { getTotalItems } = useContext(CartContext);

    return (
        <>
            <img className="widget" src="https://batukjeans.com.ar/site/wp-content/themes/creativedog-timber-woocommerce-theme/assets/images/bag-emty.svg" alt="carrito" width={17}/>
            {getTotalItems() !== 0 && <span className='cart-counter'>{getTotalItems()}</span>}
        </>
    );
}