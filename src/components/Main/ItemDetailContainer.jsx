import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { products } from '../../mock/products'

const ItemDetailContainer = () => {
  const [item, setItem] = useState({})
  const { idProd } = useParams();

  useEffect(() => {
    const getProduct = () => {
      return new Promise((res, rej) => {
        const product = products.find((prod) => prod.id === +idProd)
        setTimeout(() => {
          res(product)
        }, 500)

      });
    };
    getProduct()
      .then((res) => {
        setItem(res);

      }).catch((error) => {
        console.log(error);
      });
  }, [idProd]);


  return (
    <div className="detail-container">
      <ItemDetail item={item} />
    </div>
  )

  //console.log(idProd)





}






export default ItemDetailContainer