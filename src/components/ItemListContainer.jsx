import React from 'react'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <article>
                <h1 className='h1-saludo'>{greeting}</h1>
            </article>
        </div>
    )
}

export default ItemListContainer