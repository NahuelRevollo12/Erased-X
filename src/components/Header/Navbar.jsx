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
                    <NavLink className="links" to="/categoria/gorras">Gorras</NavLink>
                    <NavLink className="links" to="/categoria/zapatillas">Zapatillas</NavLink>
                    <NavLink className="links" to="/categoria/camisas">Camisas</NavLink>
                </ul>
                <Link className="links" to="/cart">
                    <CardWidget />
                </Link>




            </nav>
        </div>
    )
}

export default Navbar