import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import BarLoader from 'react-spinners/BarLoader';
//Skeleton muy parecido a YT con lineas al cargar.
//import Skeleton from 'react-loading-skeleton';
//import 'react-loading-skeleton/dist/skeleton.css';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    //const valor = useParams();
    //console.log(valor.categoryName)

    const { categoryName } = useParams()

    useEffect(() => {

        const getProducts = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter((prod) => prod.category === categoryName)
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
            })
            .finally(() => {
                setLoading(false);
            });

        return () => setLoading(true);
    }, [categoryName]);


    if (loading) {
        return (
            <div className="container">
                <BarLoader size={60} color="aqua" />
                {/* <Skeleton /> */}
                {/* <Skeleton count={7} width={200} height={40} /> */}
            </div>
        );
    }


    return (
        <div className="container">
            <h2>{saludo}</h2>
            <ItemList items={items} />
        </div>
    );
};

export default ItemListContainer