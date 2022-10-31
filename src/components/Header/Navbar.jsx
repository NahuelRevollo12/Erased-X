import React from "react";
// import Button from "../Button";
import CardWidget from './CartWidget';
import { Link, NavLink } from "react-router-dom";





const Navbar = () => {


    return (
        <div>
            <nav className='navbar'>
                <h1>
                    <Link className="links" to="/">Erased-X</Link>
                </h1>
                <ul>
                    <NavLink className="links" to="/category/camisas">Camisas</NavLink>
                    <NavLink className="links" to="/category/zapatillas">Zapatillas</NavLink>
                    <NavLink className="links" to="/category/gorras">Gorras</NavLink>
                </ul>
                <Link className="links" to="/cart">
                    <CardWidget />
                </Link>




            </nav>
        </div>
    )
}

export default Navbar