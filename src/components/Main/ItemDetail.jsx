import React from 'react'
import Contador from './Contador'
const ItemDetail = ({item}) => {
    const onAdd = (cantidad) => console.log(cantidad);
  return (
    <div className="detail">
        <img src={item.img} alt={item.title} />
        <article>
            <h2>{item.title}</h2>
            <p>Las mejores prendas de ropa de esta temporada.</p>
            <h3>${item.price}.-</h3>
            <Contador stock={item.stock} onAdd={onAdd} />
        </article>
    </div>
  )
}

export default ItemDetail