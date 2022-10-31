import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {
    return (
        <div className='item'>
            <img src={producto.img} alt={producto.title} />
            <article className="info">
                <h2>{producto.title}</h2>
                <h4 className="descuento">{producto.descuento}% off</h4>
                <div className="info-price">
                    <h3>${(producto.price * producto.descuento) / 100}.-</h3>
                    <h5>${producto.price}.-</h5>
                </div>
                <Link to={`/detail/${producto.id}`}>Ver Detalle</Link>
            </article>


        </div>
    )
}

export default Item;