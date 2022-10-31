import React from 'react'
import Contador from './Contador'
const ItemDetail = () => {
    const onAdd = (cantidad) => console.log(cantidad);
  return (
    <div>
        <img src="https://res.cloudinary.com/ericwaje/image/upload/v1619372705/camisa2_tmojul.jpg" alt="Camisas" />
        <div>
            <h2>Camisas</h2>
            <p>Las mejores camisas para Vestir y Hawaianas de esta temporada.</p>
            <h3>$2300</h3>
            <Contador stock={10} onAdd={onAdd} />
        </div>
    </div>
  )
}

export default ItemDetail