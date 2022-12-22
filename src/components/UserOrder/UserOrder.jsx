import './userOrder.css';
import { db } from '../../utils/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { SpinnerComp } from '../Spinner/Spinner';
import { useEffect, useState } from 'react';

export const UserOrder = ({order}) => {
    const [buyer, setBuyer] = useState({});
    
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const getBuyer = async () => {
            try {
                const query = doc(db, 'orders', order);
                const response = await getDoc(query);
                const data = {
                    ...response.data(),
                }
                setBuyer(data.buyer);
                setLoading(false);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor: ${error}`);
            }
        }
        getBuyer();
    },[order]);

    if (loading) {
        return <SpinnerComp/>
    } else {
        return(
            <div className='order-container'>
                <h3 className='order-title'>¡Gracias por su compra!</h3>
                <p className='order-code'>Tu código de seguimiento es: <span className='fw-bold'>{order}</span></p>
                <p className='order-info'>Datos del cliente:</p>
                <div className='order-buyer'>
                    <p>Nombre: <span className='ms-1 fw-bold'>{buyer.name}</span></p>
                    <p>Apellido: <span className='ms-1 fw-bold'>{buyer.surname}</span></p>
                    <p>Email: <span className='ms-1 fw-bold'>{buyer.email}</span></p>
                    <p>Tel: <span className='ms-1 fw-bold'>{buyer.tel}</span></p>
                </div>
            </div>
        );
    }
}