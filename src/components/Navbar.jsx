import React from "react";
import Button from "./Button"
import CartWidget from "./CartWidget";


const Navbar = () => {


    return (
        <div>
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
        </div>
    )
}

export default Navbar