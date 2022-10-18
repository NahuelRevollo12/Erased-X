import React from "react";
import Button from "./Button"
import CartWidget from "./CartWidget";
const Navbar = () => {


    return (
        <nav className='navbar'>
            <h1>Erased-X</h1>
            <ul>
                <li>Catalogo</li>
                <li>Contacto</li>
            </ul>
            <div>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
                <Button text='Ingresar' />

            </div>
            <CartWidget />

        </nav>
    )
}

export default Navbar