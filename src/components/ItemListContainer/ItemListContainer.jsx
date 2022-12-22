import { db } from '../../utils/Firebase';
import { ItemList } from '../ItemList/ItemList';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { SpinnerComp } from '../Spinner/Spinner';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {
    const [products,setProducts] = useState([]);

    const [loading,setLoading] = useState(true);

    const { categoryId } = useParams();

    document.title = !categoryId ? `Batuk – Batuk Originals & Huoky Store` : "Productos – Batuk";

    useEffect(() => {
        const getProducts = async () => {
            try {
                const itemsCollection = collection(db,'products');
                const queryItems = !categoryId ? itemsCollection : query(itemsCollection, where('category', '==', categoryId));
                const response = await getDocs(queryItems);
                const docs = response.docs;
                const data = docs.map(doc => {
                    return {
                        ...doc.data(), id: doc.id
                    }});
                    setProducts(data);
            } catch (error) {
                console.log(`Error al intentar conectar con el servidor: ${error}`);
            } finally {
                setLoading(false);
            }
        }
        getProducts();
    },[categoryId]);


    return (
        <>
            {
                loading ? <SpinnerComp/> : <ItemList items= {products}/>
            }
        </>
    );
}