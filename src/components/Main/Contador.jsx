import { useState } from 'react';

const Contador = ({ stock, onAdd, initial = 1 }) => {
    const [cantidad, setCantidad] = useState(initial);

    const sumar = () => {
        
        cantidad < stock && setCantidad(cantidad + 1);
        
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
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
