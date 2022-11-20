import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import Contador from './Contador'


const ItemDetail = ({ item }) => {

  
  const [show, setShow] = useState(true);

  const { addToCart, cantidadDeProducto } = useContext(CartContext);

  const onAdd = (cantidad) => {
    
    setShow(false);
    addToCart(item, cantidad);
  };

  const cantidad = cantidadDeProducto(item.id);


  return (
    <div className="detail">
      <img src={item.img} alt={item.title} />
      <article>
        <h2>{item.title}</h2>

        <p>Las mejores prendas de ropa de esta temporada.</p>
        <h3>${item.price}.-</h3>
        
        {show ? (
          <Contador
            stock={item.stock}
            onAdd={onAdd}
            initial={cantidad}
          />
        ) : (
          <Link to="/cart">Ver carrito</Link>
        )}
      </article>
    </div>
  )
}

export default ItemDetail

