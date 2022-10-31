import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);

    //const valor = useParams();
    //console.log(valor.categoryName)

    const { categoryName } = useParams()

    useEffect(() => {

        const getProducts = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter((prod)=>prod.category === categoryName)
                const ref = categoryName ? prodFiltrados : products;
                setTimeout(() => {
                    res(ref);
                }, 500);
            });
        };
        getProducts()
            .then((res) => {
                setItems(res);
            })
            .catch((error) => {
                console.log(error);
            });


    }, [categoryName]);

    return (
        <div className="container">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer