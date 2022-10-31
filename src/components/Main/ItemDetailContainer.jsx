import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {

  const {idProd} = useParams()

  console.log(idProd)


  return (
    <div style={{margin: '10px', border: '2px solid aqua'}}>
        <ItemDetail />
    </div>
  )
}

export default ItemDetailContainer