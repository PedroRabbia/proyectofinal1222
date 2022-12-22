import './checkout.css';
import 'react-toastify/dist/ReactToastify.css';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { AiFillCheckCircle } from 'react-icons/ai';
import { CartContext } from '../../context/CartContext';
import { db } from '../../utils/Firebase';
import { errorNotif, successNotif} from '../../helper/helper';
import { MdError } from 'react-icons/md';
import { ToastContainer } from 'react-toastify';
import { useContext, useState } from 'react';
import { UserOrder } from '../UserOrder/UserOrder';

export const Checkout = () => {
    const {cartList,getTotalPrice,clearCart} = useContext(CartContext);

    const [userInput,setUserInput] = useState({
        name: '',
        surname: '',
        email: '',
        tel: ''
    });

    const [validForm, setValidForm] = useState({
        name: false,
        surname: false,
        email: false,
        tel: false
    });

    const [orderId,setOrderId] = useState('');

    document.title = "Finalizar compra – Batuk";

    const formInfo = [
        {
            title: 'Nombre',
            regex: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
            placeholder: 'Nombre',
            id: 'name' 
        },
        {
            title: 'Apellido',
            regex: /^[a-zA-ZÑñÁáÉéÍíÓóÚúÜü\s]+$/,
            placeholder: 'Apellido',
            id: 'surname'
        },
        {
            title: 'Email',
            regex: /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
            placeholder: 'Correo electrónico',
            id: 'email'
        },
        {
            title: 'Teléfono',
            regex: /^[0-9]+$/,
            placeholder: 'Número de teléfono',
            id: 'tel'
        }
    ];

    const validate = (input) => {
        input.regex.test(userInput[input.id]) ? setValidForm({...validForm, [input.id]: true}) : setValidForm({ ...validForm, [input.id]: false });
    }

    const updateStock = () => {
        cartList.forEach((item) => {
            const orderDoc = doc(db,'items',item.id);
            updateDoc(orderDoc, {stock: item.stock - item.quantity});
        });
    }

    const sendOrder = (e) => {
        e.preventDefault();
        if (validForm.name && validForm.surname && validForm.email && validForm.tel) {
            const order = {
                buyer: {
                    name: userInput.name,
                    surname: userInput.surname,
                    email: userInput.email,
                    tel: userInput.tel
                },
                items: cartList,
                total: getTotalPrice(),
            }
            const ordersCollection = collection(db,'orders');
            addDoc(ordersCollection,order).then(({id}) => setOrderId(id)).catch((error) => {
                console.log(`Error al intentar conectar con el servidor: ${error}`);
            });
            updateStock();
            clearCart();
            successNotif('Datos enviados correctamente!');
        } else {
            errorNotif('Sus datos son incorrectos. Por favor, rellene el formulario.');
        }
    }

    if (orderId) {
        return <UserOrder order={orderId}/>
    } else {
        return(
            <>
                <form onSubmit={sendOrder}>
                <h3>Detalles de facturación</h3>
                    {
                        formInfo.map((input) => {
                            return(
                                <div key={input.id} className='form-section'>
                                    
                                    <label>{input.title}</label>
                                    <input onKeyUp={() => validate(input)} onChange={(e) => setUserInput({...userInput, [input.id]: e.target.value})} type='text' placeholder={input.placeholder}/>
                                    {
                                        validForm[input.id] ? <span><AiFillCheckCircle/></span> : userInput[input.id] === '' ? '' : <span><MdError/></span>
                                    } 
                                </div>
                            );
                        })
                    }
                    <button className='btn btn-success d-block mt-5'>Finalizar compra</button>
                </form>
                <ToastContainer/>
            </>
        );
    }
} 