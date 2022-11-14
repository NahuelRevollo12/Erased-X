import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Contador from './Contador'


const ItemDetail = ({ item }) => {

  //const [cant, setCant] = useState(0);
  const [show, setShow] = useState(true);

  const { addToCart } = useContext(CartContext);

  const onAdd = (cantidad) => {
    //console.log(cantidad);
    //setCant(cantidad);
    setShow(false);
    addToCart(item, cantidad);
  };

  return (
    <div className="detail">
      <img src={item.img} alt={item.title} />
      <article>

        <p>Las mejores prendas de ropa de esta temporada.</p>
        <h3>${item.price}.-</h3>
        {/* <h3>{show ? 'True' : 'False'}</h3> */}
        {show ? (
          <Contador stock={item.stock} onAdd={onAdd} />
        ) : (
          <Link to="/cart">Ver carrito</Link>
        )}
      </article>
    </div>
  )
}

export default ItemDetail

//Acá se podria hacer una function pero se podria utilizar en otro sitio como y recibiria un argumento de: (contador.jsx)
//const foo = (argumento) => {}