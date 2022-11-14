import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);


    //funciones
    const addToCart = (item, cantidad) => {

        if (isInCart(item.id)) {
            //sumo la cantidad
            sumarCantidad(item, cantidad);

        } else {
            setCart([...cart, { ...item, cantidad }]);
        }
    };

    //funcion para ver si está en el carrito
    const isInCart = (id) => {
        return cart.some((prod) => prod.id === id);
    };

    //funcion para sumar la cantidad de un mismo producto
    //Hecho con un Ternario
    const sumarCantidad = (itemPorAgregar, cantidad) => {
             const cartActualizado2 = cart.map((prodDelCarrito) =>
                itemPorAgregar.id === prodDelCarrito.id
                    ? {
                          ...prodDelCarrito,
                          cantidad: prodDelCarrito.cantidad + cantidad,
                      }
                    : prodDelCarrito
            );
             setCart(cartActualizado2)
         };

    //funcion para vaciar el carrito
    const deleteAll = () => {
        setCart([]);
    };

    //funcion para eliminar un solo producto
    const deleteOne = (id) => {
        const prodFiltrados = cart.filter((prod) => prod.id !== id);
        setCart(prodFiltrados);
    };

    //funcion para sumar total $ del carrito

    //funcion para sumar unidades totales del carrito (CartWidget)
    const totalUnidades = () => {
        let count = 0;
        const copia = [...cart];
        copia.forEach((prod) => {
            count = count += prod.cantidad;
        });
        return count;
    };
    
    // const totalUnidadesReduce = () => {
    //     return cart.reduce((prev, curr)=> prev + curr.cantidad, 0)
    // }

    const totalPrecio = () => 1000;

    //console.log(cart);

    //variables

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteAll,
                deleteOne,
                totalUnidades,
                totalPrecio,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;