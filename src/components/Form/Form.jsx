import React, { useEffect, useState } from 'react'

const Form = () => {
    //const [name, setName] = useState('');
    //const [lastName, setLastName] = useState('');


    //Forma más compleja, cambiamos el value y creamos una sola funcion para los 2 campos. es para el dia de mañana tengamos más inputs.
    const [data, setData] = useState({ nombre: '', apellido: '' });


    const enviarDatos = (e) => {
        e.preventDefault();
        //console.log(e);

        //enviar a mi base de datos los campos name y lastName
        // const obj = {
        //     comprador: {
        //         nombre: name,
        //         apellido: lastName,
        //     },
        // };
        // Y se deberia enviar un par de inputs más, como email. imagen del producto, etc.
    };


    const handleChange = (e) => {
        //Aplicamos destructuring, para obtener los valores/campos:
        const { name, value } = e.target;
        //e.target.value tengo el valor
        //e.target.name diferencio los campos
        setData({ ...data, [name]: value });
    };

    console.log(data);



    //es opcional 
    useEffect(() => {
        //window.addEventListener('mousemove', handleMove)
        console.log('Código del useEffect');
        //llamado a una api
        //setInterval
        return () => {
            //clearInterval 
            //abortar el llamado a la api
            //window.removeEventListener('mousemove', handleMove)
            console.log('Limpieza');
        };
    });




    return (
        <div style={{
            minHeight: '70vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <form action="" onSubmit={enviarDatos}>
                <input
                    type="text"
                    placeholder="Nombre"
                    name="nombre"
                    onChange={handleChange}
                    value={data.nombre}
                />
                <input
                    type="text"
                    placeholder="Apellido"
                    name="apellido"
                    onChange={handleChange}
                    value={data.apellido}
                />
                <button>Enviar</button>
            </form>
        </div>
    )
}

export default Form