import React, { useState } from 'react'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { db } from '../../services/firebaseConfig';

const Form = () => {

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [lastEmail, setLastEmail] = useState('');
    const [orderId, setOrderId] = useState('');
    const { cart, totalPrecio, deleteAll } = useContext(CartContext);
    const totalCarrito = totalPrecio();



    const enviarDatos = (e) => {
        e.preventDefault();

    

    const objOrden = {
        buyer: {
            name,
            lastName,
            telefono: 123456,
            direccion: 'Calle siempre viva 123',
            email,
            lastEmail,
        },
        items: cart,
        total: totalCarrito,
        date: serverTimestamp(),
    };


    const orderCollection = collection(db, 'orders');


    addDoc(orderCollection, objOrden)
        .then((res) => {
            setOrderId(res.id);
            deleteAll();
        })
        .catch((error) => {
            console.log('Hubo un error', error);
        });
    
};




const handleName = (e) => setName(e.target.value);
const handleLastName = (e) => setLastName(e.target.value);
const handleEmail = (e) => setEmail(e.target.value);
const handleLastEmail = (e) => setLastEmail(e.target.value);


if (orderId) {

    return (
        <h1>Gracias por tu compra tu número de seguimiento es {orderId}</h1>
    );
}

return (
    <div style={{
        minHeight: '70vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }}>
        <form action="" onSubmit={enviarDatos}>
            <input
                type="text"
                placeholder="Nombre"
                name="nombre"
                onChange={handleName}
                value={name}
            />
            <input
                type="text"
                placeholder="Apellido"
                name="apellido"
                onChange={handleLastName}
                value={lastName}
            />
            <input
                type="text"
                placeholder="email"
                name="email"
                onChange={handleEmail}
                value={email}
            />
            <input
                type="text"
                placeholder="verificar email"
                name="verificar email"
                onChange={handleLastEmail}
                value={lastEmail}
            />

            <button disabled={email !== lastEmail}>Enviar</button>
        </form>
    </div>
)
};

export default Form