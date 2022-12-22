import { db } from '../../utils/Firebase';
import { doc, getDoc } from 'firebase/firestore';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import { SpinnerComp } from '../Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    
    const [loading,setLoading] = useState(true);

    const { itemId } = useParams();

    document.title = !product.title ? "..." : `${product.title} – Batuk`;

    useEffect(() => {
        const getProduct = async () => {
            try {
                const query = doc(db, 'products', itemId);
                const response = await getDoc(query);
                const data = {
                    ...response.data(),
                    id: response.id
                }
                setProduct(data);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        getProduct();
    },[itemId]);

    return(
        loading ? <SpinnerComp/> : <ItemDetail item={product}/>
    );
}