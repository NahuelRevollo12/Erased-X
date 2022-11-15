import React, { useEffect, useState } from 'react'
import { products } from '../../mock/products';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom'
import BarLoader from 'react-spinners/BarLoader';
//Skeleton muy parecido a YT con lineas al cargar.
//import Skeleton from 'react-loading-skeleton';
//import 'react-loading-skeleton/dist/skeleton.css';
import { getDocs, query, where } from 'firebase/firestore';
import { collectionProd } from '../../services/firebaseConfig';

const ItemListContainer = ({ saludo }) => {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    //const valor = useParams();
    //console.log(valor.categoryName)

    const { categoryName } = useParams()

    useEffect(() => {

        getDocs(collectionProd)
            .then((res) => {

                //console.log(res.docs);
                const products = res.docs.map((prod) => {
                    //console.log(prod);
                    //console.log(prod.data());
                    return {
                        id: prod.id,
                        ...prod.data(),
                    };
                });
                setItems(products);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });



        const getProducts = () => {
            return new Promise((res, rej) => {
                const prodFiltrados = products.filter((prod) => prod.category === categoryName)
                const ref = categoryName ? prodFiltrados : products;
                setTimeout(() => {
                    res(ref);
                }, 500);
            });
        };


        // getProducts(categoryName)
        //     .then((res) => {
        //         setItems(res);
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //     })
        //     .finally(() => {
        //         setLoading(false);
        //     });

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