import React, { useState } from 'react'
import Contador from './Contador'


const ItemDetail = ({ item }) => {

  //const [cant, setCant] = useState(0);
  const [show, setShow] = useState(true);

  const onAdd = (cantidad) => {
    console.log(cantidad);
    //setCant(cantidad);
    setShow(false);
  };

  return (
    <div className="detail">
      <img src={item.img} alt={item.title} />
      <article>
        
        {show ? (
          <h2>{item.title}</h2>
        ) : (
          <h2>Este producto no tiene titulo</h2>
        )}
        <p>Las mejores prendas de ropa de esta temporada.</p>
        <h3>${item.price}.-</h3>
        <Contador stock={item.stock} onAdd={onAdd} />
      </article>
    </div>
  )
}

export default ItemDetail

//Acá se podria hacer una function pero se podria utilizar en otro sitio como y recibiria un argumento de: (contador.jsx)
//const foo = (argumento) => {}