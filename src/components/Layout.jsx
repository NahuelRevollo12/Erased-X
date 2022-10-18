import React from 'react'

const Layout = (props) => {
    console.log(props.children)

    return (
        <div>
            <article>
                {props.children}
            </article>
        </div>
    )
}

export default Layout