import React from "react";
import CardWidget from './CartWidget';
import { Link, NavLink } from "react-router-dom";
import { useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../services/firebaseConfig';




const Navbar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const catCollection = collection(db, 'categorias');
        getDocs(catCollection)
            .then((res) => {
                const secciones = res.docs.map((prod) => {
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setCategories(secciones);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);



    return (
        <div>
            <nav className='navbar'>
                <h1>
                    <Link className="links" to="/">Erased-X</Link>
                </h1>
                <ul>
                {categories.map((cat) => (
                    <NavLink
                        key={cat.id}
                        className="links"
                        to={`/categoria/${cat.path}`}
                    >
                        {cat.title}
                    </NavLink>
                ))}
                </ul>
                <Link className="links" to="/cart">
                    <CardWidget />
                </Link>


            </nav>
        </div>
    )
}

export default Navbar