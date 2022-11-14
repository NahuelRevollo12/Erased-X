import { useState } from 'react';

const Contador = ({ stock, onAdd }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        //Ejemplo del profe, que se puede usar donde nosotros querramos.
        //cantidad < stock ? setCantidad(cantidad + 1) : alert('No se pude seguir sumado')
        cantidad < stock && setCantidad(cantidad + 1);
        /* if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
        } else{
            alert(...)
        } */
    };

    // eslint-disable-next-line
    const reset = () => {
        setCantidad(0);
    };
    
    const agregar = () => onAdd(cantidad);

    return (
        <div className="counter">
            <section>
                <p>{cantidad}</p>
                <div>
                    <button onClick={restar}>-</button>

                    <button disabled={cantidad === stock} onClick={sumar}>
                        +
                    </button>
                </div>
            </section>
            <div>
                <button className="add" onClick={agregar}>
                    Agregar al carrito
                </button>
            </div>
        </div>
    );
};

export default Contador;

// y acá la podriamos utilizarla
//foo(parametro)